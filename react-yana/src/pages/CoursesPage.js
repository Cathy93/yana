import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse'
import SubHeading from '../components/SubHeading'
import vaclLogoMod from '../img/vacl_mod_logo.jpg';

const CoursesPage = () => (
  <div>
    <MainHeader title="Courses"/>
    <SubHeading title="Level 1"/>
    <LevelCourse course_icon={vaclLogoMod}
                 course_icon_name="animal_course_icon"
                 singleCoursePath="/single_course_animal"
                 title="Animal"/>
    <LevelCourse course_icon={vaclLogoMod}
                 course_icon_name="animal_course_icon"
                 singleCoursePath="/single_course_animal"
                 title="Animal"/>
    <LevelCourse course_icon={vaclLogoMod}
                 course_icon_name="animal_course_icon"
                 singleCoursePath="/single_course_animal"
                 title="Animal"/>

    <SubHeading title="Level 2"/>
    <SubHeading title="Level 3"/>
  </div>
)

export default CoursesPage;
