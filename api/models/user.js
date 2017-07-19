require('./init')
const passportLocalMongoose = require('passport-local-mongoose')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({})

userSchema.plugin(passportLocalMongoose,
  {
   usernameField: 'email',
   usernameLowerCase: true, // Emails are case-insensitive
   session: false // Disable sessions as we’ll use JWTs
})

const User = mongoose.model('User', userSchema)

module.exports = User
