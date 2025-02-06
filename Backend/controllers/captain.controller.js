// controllers/captain.controller.js

const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registration function (you can add your registration logic)
module.exports.registerCaptain = async (req, res, next) => {
  // Your registration logic here...
  res.status(201).json({ message: 'Captain registered successfully' });
};

// Login function (if you intend to support login)
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select('+password');
  if (!captain) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = captain.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({ token, captain });
};

// **Ensure these functions are implemented and exported**

module.exports.getCaptainProfile = async (req, res, next) => {
  // Assuming your authentication middleware sets req.captain
  if (!req.captain) {
    return res.status(404).json({ message: 'Captain not found' });
  }
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  // Example logout logic: clear the token cookie.
  // You might want to implement additional logic such as blacklisting the token.
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successfully' });
};
