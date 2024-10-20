const User = require('../models/user')

const blockUser = async (req, res) => {
  try {
    const receiverId = req.params.id
    const senderId = req.user._id

    const sender = await User.findOne({_id: senderId})
    const blockedUsers = sender.blocked
    if (blockedUsers.includes(receiverId)) {
      User.findOneAndUpdate({ _id: senderId }, { $pull : { blocked: receiverId } }, { new: true })
        .then(updatedUser => {
         updatedUser.password = undefined          
          res.status(200).json(updatedUser)
        })
        .catch(err => console.log(err))
    } else {
      User.findOneAndUpdate({ _id: senderId }, { $push: { blocked: receiverId } }, { new: true })
      .then(updatedUser => {
        updatedUser.password = undefined
        res.status(200).json(updatedUser)
      })
      .catch(err => console.log(err))
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { blockUser }