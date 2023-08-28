function validateUser(req, res, next) {
   const { name, email, password } = req.body
   const errors = []

   // Validation checks
   if (!name || name.length < 3 || name.length > 30) {
      errors.push('Name should be between 3 and 30 characters')
   }

   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
   if (!email || !emailRegex.test(email)) {
      errors.push('Invalid email format')
   }

   if (!password || password.length < 8) {
      errors.push('Password must be at least 8 characters long')
   }

   const uppercaseRegex = /[A-Z]/
   if (!uppercaseRegex.test(password)) {
      errors.push('Password must contain at least one uppercase letter')
   }

   const lowercaseRegex = /[a-z]/
   if (!lowercaseRegex.test(password)) {
      errors.push('Password must contain at least one lowercase letter')
   }

   const numberRegex = /[0-9]/
   if (!numberRegex.test(password)) {
      errors.push('Password must contain at least one number')
   }

   const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/
   if (!specialCharsRegex.test(password)) {
      errors.push('Password must contain at least one special character')
   }

   // Check if there are any errors
   if (errors.length > 0) {
      const error = new Error()
      error.errors = errors
      return next(error)
   }

   // Validation passed
   next()
}

module.exports = validateUser
