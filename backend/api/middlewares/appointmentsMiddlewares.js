const mongoose = require('mongoose');
const Appointment = require('../models/appointment.model');

const validateUserId = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.body.user_id)) {
    return res.status(400).json({ message: 'Invalid patient ID' });
  }
  // Check if user exists in the database
  const user = await User.findById(user_id);
  if (!user) {
    return res.status(400).json({ message: 'Patient not found' });
  }
  next();
};

const validateHospitalId = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.body.hospital_id)) {
    return res.status(400).json({ message: 'Invalid hospital ID' });
  }
  // Check if hospital exists in the database
  const hospital = await Hospital.findById(hospital_id);
  if (!hospital) {
    return res.status(400).json({ message: 'Hospital not found' });
  }

  next();
};

const validateDoctorId = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.body.doctor_id)) {
    return res.status(400).json({ message: 'Invalid doctorID' });
  }
  // Check if doctor exists in the database
  const doctor = await Doctor.findById(doctor_id);
  if (!doctor) {
    return res.status(400).json({ message: 'Doctor not found' });
  }


  next();
};

const checkDoctorScheduleConflict = async (req, res, next) => {
  const { doctor_id, date } = req.body;

  // Check if doctor is already booked at the requested time
 try{
    const existingAppointment = await Appointment.findOne({ doctor_id, date });
  if (existingAppointment) {
    return res.status(400).json({ message: 'Doctor is already booked at this time' });
  }

  next();
 } catch (error){
    return res.status(500).json({ message: 'Error checking appointment: ' + error.message });
 }
  
};

//check if the date in the appointment request is a valid date
const validateAppointmentDate = (req, res, next) => {
    const { date } = req.body;
  
    if (!date || isNaN(Date.parse(date))) {
      return res.status(400).json({ message: 'Invalid appointment date' });
    }
  
    if (new Date(date) < new Date()) {
      return res.status(400).json({ message: 'Appointment date must be in the future' });
    }
  
    next();
  };

module.exports = { validateUserId, validateHospitalId, validateDoctorId, checkDoctorScheduleConflict, validateAppointmentDate  };
