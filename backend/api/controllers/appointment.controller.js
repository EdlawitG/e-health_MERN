const Appointment = require('../models/appointment.model')
const Doctor = require('../models/doctor.model')
// Create a new appointment
const createAppointment = async (req, res, next) => {
   const { doctorId, date, time } = req.body
   const doctor = await Doctor.findById(doctorId).select('-password')
   console.log(doctor)
   // Create a new appointment instance
   const appointment = new Appointment({
      doctor: doctorId,
      user: req.userId,
      hospital: doctor.hospital,
      bill: "6497496753656b184a4c94f7",
      date,
      time,
   })

   // Save the appointment to the database
   await appointment.save()
   if (!appointment) return next({ status: 500 })
   res.status(201).json({ appointment })
}

// Get all appointments
const getAllAppointments = async (req, res, next) => {
   const appointments = await Appointment.find({
      [req.accType]: req.userId,
   }).populate('doctor user hospital', 'name')

   const formattedAppointments = appointments.map(appointment => {
      return {
         id: appointment._id,
         date: appointment.date,
         time: appointment.time,
         status: appointment.status,
         user_name: appointment?.user?.name,
         doctor_name: appointment?.doctor?.name,
         hospital_name: appointment?.hospital?.name,
      }
   })

   res.status(200).json(formattedAppointments)
}

// Get appointment by ID
const getAppointmentById = async (req, res, next) => {
   const appointmentId = req.params.id
   const appointment = await Appointment.findOne({
      _id: appointmentId,
      [req.accType]: req.userId,
   }).populate('user doctor hospital', '_id name')

   if (!appointment) return next({ status: 404 })

   const formattedAppointments = {
      appointment_id: appointment._id,
      date: appointment.date,
      time: appointment.time,
      bill: appointment.bill,
      status: appointment.status,
      doctor_id: appointment?.doctor?._id,
      doctor_name: appointment?.doctor?.name,
      hospital_id: appointment?.hospital?._id,
      hospital_name: appointment?.hospital?.name,
      user_id: appointment?.user?._id,
      user_name: appointment?.user?.name,
   }

   res.status(200).json(formattedAppointments)
}

// Delete appointment by ID
const deleteAppointmentById = async (req, res, next) => {
   const appointmentId = req.params.id
   const appointment = await Appointment.findOneAndDelete({
      _id: appointmentId,
      user: req.userId,
   })

   if (!appointment) return next({ status: 404 })
   res.sendStatus(204)
}

module.exports = {
   createAppointment,
   getAllAppointments,
   getAppointmentById,
   deleteAppointmentById,
}
