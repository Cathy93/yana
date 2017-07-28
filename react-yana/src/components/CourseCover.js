import React from 'react'
import LevelCourse from './LevelCourse'
import ActionButton from './ActionButton'
import Footer from './Footer'

const CourseCover = ({course, nextWord, languageId, totalWords}) => (
  <div>
    <h1 className="home-heading-text text-center">{course.courseName}</h1>

    <LevelCourse course_icon={course.courseImage}
                 course_icon_name="animal_course_icon"
                 path={nextWord}
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
