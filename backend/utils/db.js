const mongoose = require('mongoose')
const { MONGODB_URI } = require('./config')

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('connected to MongoDB')
  } catch (error) {
    console.log('error connecting to MongoDB', error.message)
  }
}

module.exports = {
  connectToMongoDb
}
