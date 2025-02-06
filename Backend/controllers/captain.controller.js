// controllers/captain.controller.js

const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

// Registration function (you can add your registration logic)
module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  try {
    // Check if captain already exists
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({ message: 'Captain already exists' });
    }

    // Hash password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create new captain
    const captain = await captainModel.create({
      fullname,
      email,
      password: hashedPassword,
      vehicle
    });

    // Generate token and set cookie
    const token = captain.generateAuthToken();
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'false',
      sameSite: 'lax'
    });

    res.status(201).json({ message: 'Captain registered successfully', captain });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
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
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  await blacklistTokenModel.create({token});
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successfully' });
};

