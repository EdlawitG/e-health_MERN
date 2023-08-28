const User = require('../models/user.model')
const Hospital = require('../models/hospital.model')
const Doctor = require('../models/doctor.model')

const checkEmailInUse = async (req, res, next) => {
   const { email } = req.body

   try {
      const [user, hospital, doctor] = await Promise.all([
         user.findOne({ email }),
         Hospital.findOne({ email }),
         Doctor.findOne({ email }),
      ])

      if (user || hospital || doctor) {
         res.status(400)
         return next({ message: 'Email is already in use', status: 400 })
      }

      next()
   } catch (error) {
      next(error)
   }
}

module.exports = checkEmailInUse
