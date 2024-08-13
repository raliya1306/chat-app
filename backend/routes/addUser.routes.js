const { addUser } = require('../controllers/addUser.controller')

const verifyUser = require('../utils/verifyUser')


const addUserRouter = require('express').Router()

addUserRouter.get('/:id', verifyUser, addUser)

module.exports = addUserRouter