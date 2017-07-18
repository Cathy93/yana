const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect(process.env.MONGOURL, { useMongoClient: true })


const db = mongoose.connection

module.exports = mongoose
