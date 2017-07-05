import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse';
import Footer from '../components/Footer';

import animal from '../img/animal.png';

const SingleCourseAnimalPage = () => (
  <div>
    <MainHeader title="Animal"/>

    <LevelCourse course_icon={animal}
                 course_icon_name="animal_course_icon"
                 singleCoursePath="/single_course_animal"
                 title="Animal"/>

      <h3 className="course-description text-center">Level 1 - Beginners</h3>
      <p className="course-description text-center">Words: 34</p>
    <Footer />
  </div>
)

export default SingleCourseAnimalPage;
