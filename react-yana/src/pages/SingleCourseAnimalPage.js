import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse';
import ButtonThin from '../components/ButtonThin';
import Footer from '../components/Footer';

import animal from '../img/animal.png';

const SingleCourseAnimalPage = () => (
  <div>
    <MainHeader title="Animal"/>

    <LevelCourse course_icon={animal}
                 course_icon_name="animal_course_icon"
                 singleCoursePath="/single_course_animal"
                 />

      <h3 className="course-description text-center">Level 1 - Beginners</h3>
      <p className="course-description text-center">Words: 34</p>

      <div className='button-wrapper'>
        <ButtonThin title="Start"
                     buttonPath="/animal_exercise_page" />
       </div>
    <Footer />
  </div>
)

export default SingleCourseAnimalPage;
