var mongoose = require('mongoose')
require('./init')
var Schema = mongoose.Schema

const languagesSchema = new Schema({
  en: String, // 'Platypus'
  br: String, // 'Ornitorrico'
  de: String
})

const courseSchema = new Schema({

    courseName: String, // 'Animal'
    level: Number, // '1'
    courseImage: String, // level course component
    words: [
      {
        title: languagesSchema,
        audio: {
          en: String,
        },
        image: {
          url: String
        }
      }
    ]
})

const Course = mongoose.model('Course', courseSchema )

module.exports = Course
