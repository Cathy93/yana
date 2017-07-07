require('dotenv').config()
const Course = require('../models/course')

Course.create([
  {
    level: 1,
    course: ['hey', 'how', 'why'],
    image: 'blah',
    words:  ['Array', 'hash']
  },
  {
    level: 2,
    course: ['george', 'how', 'why'],
    image: 'blah',
    words:  ['livia', 'hash']
  },
  {
    level: 4,
    course: ['hey', 'how', 'why'],
    image: 'blah',
    words:  ['Array', 'hash']
  }
])
