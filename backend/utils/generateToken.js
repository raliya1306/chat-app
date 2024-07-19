const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign(
    { userId },
    SECRET,
    { expiresIn: '10d' })

  res.cookie('token', token, {
    httpOnly:true,
    sameSite: 'strict'
  })
}

module.exports = {
  generateTokenAndSetCookie
}