const Doctor = require('../models/doctor.model')
const Appointment = require('../models/appointment.model')

const validateAppointment = async (req, res, next) => {
   console.log(req.body);
   if (req.accType !== 'user')
      return next({ status: 401, errors: ['only user can make appointment'] })
   const { doctorId: doctorId, date, time } = req.body

   // Check if the doctor is valid
   const doctor = await Doctor.findById(doctorId)
   if (!doctor) return next({ errors: ['doctor not ound'], status: 404 })

   // Check if the date and time are provided
   if (!date || !time)
      return next({ status: 400, errors: ['date and time are required'] })

   // Check if the date and time are not behind the current date and time
   req.hospitalId = doctor.hospital
   next()
}

module.exports = validateAppointment
