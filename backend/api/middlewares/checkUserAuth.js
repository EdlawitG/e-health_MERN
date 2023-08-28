const mongoose = require('mongoose');
const User = require('../models/user.model');
const Hospital = require('../models/hospital.model');

const checkUserAuth = async (req, res, next) => {
  if (req.user.role === 'user') {
    // Retrieve user_id from database using authenticated user's id
    try {
      const user = await User.findOne({ user_id: req.user.id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      req.user_id = user.id;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Error checking user authentication: ' + error.message });
    }
  } else if (req.user.role === 'hospital') {
    // Retrieve hospital_id from database using authenticated user's id
    try {
      const hospital = await Hospital.findOne({ user_id: req.user.id });
      if (!hospital) {
        return res.status(404).json({ message: 'Hospital not found' });
      }
      req.hospital_id = hospital.id;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Error checking hospital authentication: ' + error.message });
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { checkUserAuth };
