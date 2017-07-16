import React from 'react'
import ReactDOM from 'react-dom';

// Components
import Footer from './Footer'
import Thumbnails from './Thumbnails'
import ButtonThin from './ButtonThin'
import FinishedCourse from '../img/finished_level.png'

const FinishCourse = ({course}) => (
  <div>
      <h2 className="text-center">Congratulations!</h2>
    <Thumbnails
      course_icon={ FinishedCourse }
      course_icon_alt="congratulation-image"
    />

    <h3 className="text-center">You finish your {course.courseName} course!</h3>

    <ButtonThin title="More Courses"
                buttonPath="/Languages" />


    <Footer />
  </div>
)

export default FinishCourse;
