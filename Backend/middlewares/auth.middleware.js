const jwt = require('jsonwebtoken'); // Add missing import
const userModel = require('../models/user.models');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blacklistToken.model');

// Auth middleware for users
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const isBlacklisted = await blackListTokenModel.findOne({ token });
        if (isBlacklisted) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Auth middleware for captains
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const isBlacklisted = await blackListTokenModel.findOne({ token });
        if (isBlacklisted) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if (!captain) return res.status(401).json({ message: 'Unauthorized' });

        req.captain = captain;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};