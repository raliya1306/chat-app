const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routes')
const messageRouter = require('./routes/message.routes')
const addUserRouter = require('./routes/addUser.routes')
const UsersRouter = require('./routes/Users.routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/add-user', addUserRouter)
app.use('/api/users', UsersRouter)

module.exports = app