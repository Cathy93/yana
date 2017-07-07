const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL, { useMongoClient: true })
mongoose.Promise = Promise
