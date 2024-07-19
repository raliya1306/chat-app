const { signup, login, logout } = require('../controllers/auth.controller')

const authRouter = require('express').Router()

authRouter.post('/signup', signup)

authRouter.post('/login', login)

authRouter.post('/logout', logout)

module.exports = authRouter