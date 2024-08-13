const {  getMessages, sendMessage } = require('../controllers/message.controller')
const verifyUser = require('../utils/verifyUser')

const messageRouter = require('express').Router()

messageRouter.get('/:id', verifyUser, getMessages)
messageRouter.post('/send/:id', verifyUser, sendMessage)

module.exports = messageRouter