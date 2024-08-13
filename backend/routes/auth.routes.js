const { signup, upload, login, logout } = require('../controllers/auth.controller')

const authRouter = require('express').Router()

authRouter.post('/signup', upload.single('avatar'), signup)

authRouter.post('/login', login)

authRouter.post('/logout', logout)

module.exports = authRouter