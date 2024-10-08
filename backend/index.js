const { app, server } = require('./socket/socket')
const config = require('./utils/config')
const { connectToMongoDb } = require('./utils/db')
const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routes')
const messageRouter = require('./routes/message.routes')
const addUserRouter = require('./routes/addUser.routes')
const UsersRouter = require('./routes/Users.routes')
const blockUserRouter = require('./routes/blockUser.routes')

app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/add-user', addUserRouter)
app.use('/api/users', UsersRouter)
app.use('/api/block', blockUserRouter)

server.listen(config.PORT, () => {
  connectToMongoDb()
  console.log(`Server running at port ${config.PORT}`)
})