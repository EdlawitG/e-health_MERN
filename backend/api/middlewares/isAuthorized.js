const Doctor = require('../models/doctor.model');
//used to ensure that only authorized hospitals can perform CRUD operations on the doctor accounts.
exports.isAuthorized = async (req, res, next) => {
    try {
        const doctorId = req.params.doctorId;
        const hospitalId = req.params.hospitalId;

        const doctor = await Doctor.findById(doctorId);

        if (!doctor || doctor.hospital.toString() !== hospitalId) {
            return res.status(401).json({ message: 'Unauthorized access' });
        }

        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
