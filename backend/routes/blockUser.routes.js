const { default: blockUser } = require('../controllers/blockUser.controller')
const verifyUser = require('../utils/verifyUser')

const blockUserRouter = require('express').Router()

blockUserRouter.get('/:id', verifyUser, blockUser)

module.exports = blockUserRouter