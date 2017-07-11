var mongoose = require('mongoose')
require('./init')
var Schema = mongoose.Schema

const languages = ['en', 'br', 'mk', 'my']

const languagesSchema = new Schema({
  en: String, // 'Platypus'
  br: String, // 'Ornitorrico'
  mk: String,
  my: String
})

const audioSchema = new Schema({
  en: String, // 'Platypus'
  br: String, // 'Ornitorrico'
  mk: String,
  my: String
})

const courseSchema = new Schema({

    courseName: String, // 'Animal'
    level: Number, // '1'
    courseImage: String, // level course component
    words: [
            {
              title: languagesSchema,
              audio: audioSchema,
              image: String
            }
          ]
})

const Course = mongoose.model('Course', courseSchema )

module.exports = Course
