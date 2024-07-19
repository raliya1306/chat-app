const app = require('./app')
const config = require('./utils/config')
const { connectToMongoDb } = require('./utils/db')

app.listen(config.PORT, () => {
  connectToMongoDb()
  console.log(`Server running at port ${config.PORT}`)
})