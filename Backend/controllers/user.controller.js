const userModel = require('../models/user.models');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    // Validate input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    try {
        // Check if a user with the same email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await userModel.hashPassword(password);

        // Create a new user
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        // Generate an authentication token
        const token = user.generateAuthToken();

        // Respond with the token and user details
        res.status(201).json({ token, user });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
