const express = require('express')
const Course = require('../models/course')
const router = express.Router()

// Maybe we gonna use again later
// router.route('/courses')
//   .post(function(req, res) {
//     const newCourse = new Course()  //new couurse Add
//     newCourse.level = req.body.level
//     newCourse.course = req.body.course
//     newCourse.image = req.body.image
//     newCourse.words = req.body.words
//
//     newCourse.save(function(err) {
//       if (err) { res.send(err) }
//       res.json({message:"New course added!!"})
//     })
//   })

//   .get(function(req, res) {
//     Course.find(functon (err, courses) {
//       if (err) { res.send(err) }
//       res.json(courses)
//     })
//   })
//
// router.route('/course/:course_id')
//   .get(function(req, res) {
//     Course.findById(req.params.course_id, function(err, course) {
//       if (err) { res.send(err) }
//       res.json(course)
//     })
//   })
//
//   router.route('/course/image/:image')
//     .get(function(req, res) {
//       Course.find({image:req.params.image}, function(err, course) {
//         if (err) { res.send(err) }
//         res.json(course)
//       })
//     })
//
//     router.route('/course/word/:word')
//       .get(function(req, res) {
//         Course.find({word:req.params.word}, function(err, course) {
//           if (err) { res.send(err) }
//           res.json(course)
//         })
//       })
//
//       router.route('/course/level/:level')
//         .get(function(req, res) {
//           Course.find({level:req.params.level}, function(err, course) {
//             if (err) { res.send(err) }
//             res.json(course)
//           })
//         })

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/api/courses', (req, res) => {
  newCourse = req.body;
  Course.create(newCourse)
    .then((newCourse) => {
      res.json(newCourse);
    })
    .catch((error) => {
      res.json({ error: error });
    })
});

router.get('/api/courses', (req, res) => {
  Course.find(function (err, courses) {
    if (err) { res.send(err) }
    res.json(courses)
  });
});

module.exports = router
