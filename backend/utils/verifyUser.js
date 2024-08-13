const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')
const User = require('../models/user')

const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token

    if(!token) {
      return res.status(401).json({ error: 'Unauthorized - no token provided' })
    }

    jwt.verify(token, SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Unauthorized - invalid token' })

      const user = await User.findById(decoded.userId).select('-password')
      req.user = user
      next()
    })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = verifyUser
