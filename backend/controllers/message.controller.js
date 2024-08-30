const Conversation = require('../models/conversation')
const Message = require('../models/message')
const { getReceiverSocketId, io } = require('../socket/socket')

const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    }).populate('messages')

    if(!conversation) return res.status(200).json([])

    const messages = conversation.messages

    res.status(200).json(messages)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const receiverId = req.params.id
    const senderId = req.user._id

    if (message === '') {
      return
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    })

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    await Promise.all([conversation.save(), newMessage.save()])

    const receiverSocketId = getReceiverSocketId(receiverId)
    if(receiverSocketId) {
      io.to(receiverSocketId).emit('newMessage', newMessage)
    }

    res.status(201).json(newMessage)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getMessages,
  sendMessage
}