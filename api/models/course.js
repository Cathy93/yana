require('./init')

var mongoose = require('mongoose')
var Schema = mongoose.Schema

const languages = ['eng', 's35', 's36']

const languagesSchema = new Schema({
  eng: String, // 'English'
  s35: String, // 'Boonwurrung'
  s36: String  // 'Woiwurrung'

})

const audioSchema = new Schema({
  eng: String, // 'Platypus'
  s35: String, // 'Ornitorrico'
  s36: String
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
