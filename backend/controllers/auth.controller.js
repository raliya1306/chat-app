const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { generateTokenAndSetCookie } = require('../utils/generateToken')
const multer = require('multer')
const path = require('path')

// File upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})

const signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords don\'t match' })
    }

    const user = await User.findOne({ username })

    if (user) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    const hash = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: hash,
      avatar: req.file.filename
    })

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res)
      await newUser.save()
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        blocked: newUser.blocked,
        avatar: newUser.avatar
      })
    } else {
      res.status(400).json({ error: 'Invalid user data' })
    }

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const passwordCorrect = await bcrypt.compare(password, user?.password || '')

    if (!user || !passwordCorrect) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      blocked: user.blocked,
      avatar: user.avatar
    })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const logout = (req, res) => {
  try {
    res.clearCookie('token')
    res.status(200).json({ message: 'Successfully logged out' })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  signup,
  upload,
  login,
  logout
}