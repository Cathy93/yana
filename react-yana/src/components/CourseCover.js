import React from 'react'
import ReactDOM from 'react-dom'
import MainHeader from './MainHeader'
import LevelCourse from './LevelCourse'
import ActionButton from './ActionButton'
import Footer from './Footer'

const CourseCover = ({course, nextWord, languageId, totalWords}) => (
  <div>
    <MainHeader title={course.courseName}/>

    <LevelCourse course_icon={course.courseImage}
                 course_icon_name="animal_course_icon"
                 path='/bla'
                 title=""/>

    <h3 className="course-description text-center">Level: {course.level} </h3>
    <p className="course-description text-center">Words: {totalWords}</p>

    <div className='button-wrapper'>
      <ActionButton title="Start" onClick={nextWord} />
    </div>
    <Footer />
  </div>
);

export default CourseCover;
