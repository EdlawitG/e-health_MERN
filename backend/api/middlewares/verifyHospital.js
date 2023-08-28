const jwt = require('jsonwebtoken');
const Hospital = require('../models/hospital.model');

module.exports = async function auth(req, res, next) {
  // Verify the JWT and retrieve the corresponding hospital document
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hospital = await Hospital.findById(decoded.id);
    if (!hospital) {
      return res.status(401).send('Access denied. Invalid token.');
    }

    // Add the hospital object to the request object for later use
    req.hospital = hospital;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};
