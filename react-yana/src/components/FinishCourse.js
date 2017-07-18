import React from 'react'
import ReactDOM from 'react-dom';

// Components
import Footer from './Footer'
import Thumbnails from './Thumbnails'
import ButtonThin from './ButtonThin'
import FinishedCourse from '../img/finished_level.png'
import {
  languageIDs, languageIDToNames, languageIDToFlagImages
} from '../content/languages'


const FinishCourse = ({course, languageId}) => (
  <div>
      <h2 className="home-heading-text text-center">Congratulations!</h2>
    <Thumbnails
      course_icon={ FinishedCourse }
      course_icon_alt="congratulation-image"
    />

    <h3 className="text-center">You finish the <b>{course.courseName}</b> course!</h3>

    <div className="finish-btn-wrapper">
      <ButtonThin title="More Courses"
                  buttonPath={ `/languages/${languageId}` }  />
    </div>

    <Footer />
  </div>
)

export default FinishCourse;
