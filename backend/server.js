require('dotenv').config()
require('express-async-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// const connectDB = require('./config/db')
const {
   errorHandler,
   internalErrorsHanlder,
} = require('./api/middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(cookieParser())


const userRoutes = require('./api/routes/user.route')
const hospitalRoutes = require('./api/routes/hospital.route')
const doctorRoutes = require('./api/routes/doctor.route')
const appointmentRoutes = require('./api/routes/appointment.route')
const paymentRoutes = require('./api/routes/payment.route')
const messageRoutes = require('./api/routes/message.route')
const loginRoute = require('./api/routes/login.route')

app.use('/api/users', userRoutes)
app.use('/api/hospitals', hospitalRoutes)
app.use('/api/doctors', doctorRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/login', loginRoute)
app.get('/api/logout', (req, res) => {
   res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
   })
   res.status(200).json({ message: 'Logged out successfully' })
})

app.use(errorHandler)
app.use(internalErrorsHanlder)

mongoose.connect(process.env.DB_URI).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT} 🚀`)
  )
})
