require('dotenv').config({ path: '../models/.env' })

const User = require('../models/user')

User.create([
  {
    email: "cathy@coderacademy.edu.au",
    password: "test123"
  },
  {
    email: "tech@coderacademy.edu.au",
    password: "test123"
  },
  {
    email: "livia@coderacademy.edu.au",
    password: "test123"
  },
  {
    email: "george@coderacademy.edu.au",
    password: "test123"
  }
])
