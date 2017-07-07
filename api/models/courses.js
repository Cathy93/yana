var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CourseSchema = new Schema({

  level: String,
  course: String,
  words:  Array

})

module.export = mongoose.model('Course',CourseSchema )
