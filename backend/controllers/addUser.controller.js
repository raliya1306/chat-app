const Conversation = require('../models/conversation')

const addUser = async (req, res) => {
  try {
    const receiverId = req.params.id
    const senderId = req.user._id

    const conversation = new Conversation({
      participants: [senderId, receiverId]
    })

    await conversation.save()

    res.status(200).json({ message: 'Successfully added new user' })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  addUser
}
