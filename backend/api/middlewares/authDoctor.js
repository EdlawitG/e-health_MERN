const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor.model');

exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const doctorId = decodedToken.doctorId;

        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(401).json({ message: 'Unauthorized access.' });
        }

        req.doctor = doctor;
        next();
    } catch (err){
        res.status(500).json({ error: err.message });
    }
};
