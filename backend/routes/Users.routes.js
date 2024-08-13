const { getSidebarUsers, getSearchUsers } = require('../controllers/Users.controller')
const verifyUser = require('../utils/verifyUser')

const UsersRouter = require('express').Router()

UsersRouter.get('/', verifyUser, getSidebarUsers)
UsersRouter.post('/find', getSearchUsers)

module.exports = UsersRouter