const User = require('../models/user')
const Conversation = require('../models/conversation')

const getSidebarUsers = async (req, res) => {
  try {
    const currentUserId = req.user._id
    const conversations = await Conversation.find({ participants: currentUserId })

    const allParticipants = conversations.map(p => {
      return p.participants
    })

    const usersArray = allParticipants.map(p => {
      if(p[0] === currentUserId) {
        return p[0]
      }
      else return p[1]
    })

    const promisesArray = await Promise.all(usersArray.map(async (u) => {
      const user = await User.find({ _id: u }).select('-password')
      return user
    }))

    const usersData = await Promise.all(promisesArray)

    const users = usersData.map(c => c[0])

    res.status(200).json(users)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getSearchUsers = async (req, res) => {
  try {
    const { username } = req.body
    const user = await User.findOne({ username: username })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getSidebarUsers,
  getSearchUsers
}