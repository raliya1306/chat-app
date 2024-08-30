const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign(
    { userId },
    SECRET,
    { expiresIn: '86400000' })

  res.cookie('token', token, {
    httpOnly:true,
    sameSite: 'strict'
  })
}

module.exports = {
  generateTokenAndSetCookie
}