var mongoose = require('mongoose')
require('./init')
var Schema = mongoose.Schema

var CourseSchema = new Schema({

  level: Number,
  course: Array,
  image: String,
  words:  Array

})

const Course = mongoose.model('Course', CourseSchema )

module.exports = Course
