const jwt = require('jsonwebtoken')
const findAccount = require('../helpers/findAccount')

async function authenticate(req, res, next) {
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
   }
   const [scheme, token] = authHeader.split(' ');
   // console.log(token);
   const decoded = await jwt.verify(
      token,
      process.env.JWT_TOKEN_KEY,
      (err, data) => {
         if (err) return
         return data
      }
   )
   if (!decoded?.id) return next({ status: 400, errors: ['invalid token'] })
   const { account, accType } = await findAccount({ _id: decoded.id })

   if (!accType || !account)
      return next({ status: 404, errors: ['account does not exit'] })
   req.userId = account?.id
   req.accType = accType
   next()
}

module.exports = authenticate
