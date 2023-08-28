const User = require('../models/user.model')

async function validateMessageReceiver(req, res, next) {
   try {
      const user = await User.findById(req.params.id)
      if (!user) return next({ message: 'Not Found', status: 404 })
      next()
   } catch (error) {
      next({ message: 'Not Found', status: 404 })
   }
}

module.exports = validateMessageReceiver
