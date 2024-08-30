const { Server } = require('socket.io')
const http = require('http')
const express = require('express')

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origins: ['http://localhost:5173'],
    methods: ['GET', 'POST']
  }
})

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

const userSocketMap = {}

io.on('connection', (socket) => {
  console.log('a user is connected', socket.id)
  const userId = socket.handshake.query.userId
  if(userId !== 'undefined') userSocketMap[userId] = socket.id

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
    delete userSocketMap[userId]
  })
})

module.exports = { app, io, server, getReceiverSocketId }