const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

async function verifyUserLogin(req, res, next) {
   const { email, password } = req.body

   // Check if email and password are provided
   if (!email || !password) {
      const error = new Error('Email and password are required')
      return next(error)
   }

   // Find the user by email in the database
   const user = await User.findOne({ email })
   if (!user) return next('Invalid username or password')

   const hasCorrectCredential = await bcrypt.compare(password, user.password)
   user.password = undefined
   if (!hasCorrectCredential) return next('Invalid username or password')
   req.user = user
   next()
}

module.exports = verifyUserLogin
