const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL, { useMongoClient: true })

module.exports = mongoose
