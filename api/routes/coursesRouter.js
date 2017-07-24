const express = require('express')
const Course = require('../models/course')
const router = express.Router()

router.get('/api/courses/:courseName', (req, res) => {
  Course.findOne({'courseName' : req.params.courseName}, function(err, course) {
    if (err) { res.send(err) }
    res.json(course);
  });
});

router.get('/api/courses', (req, res) => {
  Course.find(function (err, courses) {
    if (err) { res.send(err) }
    res.json(courses.map((course) => {
      return {
        level: course.level,
        courseName: course.courseName,
        courseImage: course.courseImage
      }
    }))
  });
});

module.exports = router
