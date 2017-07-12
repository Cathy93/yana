const express = require('express')
const Course = require('../models/course')
const router = express.Router()


// Permiting request from others servers;
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/api/courses/:courseName', (req, res) => {
  Course.findOne({'courseName' : req.params.courseName}, function(err, course) {
    if (err) { res.send(err) }
    res.json(course);
  });
});

router.get('/api/courses', (req, res) => {
  Course.find(function (err, courses) {
    if (err) { res.send(err) }
    res.json(courses)
  });
});

module.exports = router
