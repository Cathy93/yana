require('dotenv').config()
const Course = require('../models/course')

Course.create([
  {
    courseName: "Animal",
    level: 1,
    courseImage: "blah",
    words: [
      {
        title: { en: 'hello', br: 'hola'},
        audio: {
          en: 'http',
        },
        image: {
          url: 'bob'
        }
      }
    ]
  },
  {
    courseName: "Colors",
    level: 2,
    courseImage: "blue",
    words: [
      {
        title: { en: 'Blue', br: 'Azul'},
        audio: {
          en: 'http',
        },
        image: {
          url: 'bob'
        }
      }
    ]
  },
])
