// Dependencies
import React from 'react'

// Components
import MainHeader from '../components/MainHeader';
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';

// Img
import animal from '../img/animal.png';
import color from '../img/color.png';
import number from '../img/number.png';
import greetings from '../img/greetings.png';
import food from '../img/food.png';
import family from '../img/family.png';
import sentences from '../img/sentence.png';
import action from '../img/action.png';
import seasons from '../img/seasons.png';

const CoursesPage = () => (
  <div>
    <MainHeader title="Courses"/>
      <SubHeading title="Level 1"/>
        <LevelCourse course_icon={animal}
                     course_icon_name="animal_course_icon"
                     singleCoursePath="/single_course_animal"
                     title="Animal"/>
        <LevelCourse course_icon={color}
                     course_icon_name="color_course_icon"
                     singleCoursePath="/single_course_color"
                     title="Colours"/>
        <LevelCourse course_icon={number}
                     course_icon_name="number_course_icon"
                     singleCoursePath="/single_course_number"
                     title="Numbers"/>
      <SubHeading title="Level 2"/>
        <LevelCourse course_icon={greetings}
                     course_icon_name="greeting_course_icon"
                     singleCoursePath="/single_course_greetings"
                     title="Greetings"/>
        <LevelCourse course_icon={food}
                     course_icon_name="food_course_icon"
                     singleCoursePath="/single_course_food"
                     title="Food"/>
        <LevelCourse course_icon={family}
                     course_icon_name="family_course_icon"
                     singleCoursePath="/single_course_family"
                     title="Family"/>
    <SubHeading title="Level 3"/>
      <LevelCourse course_icon={sentences}
                   course_icon_name="sentences_course_icon"
                   singleCoursePath="/single_course_sentences"
                   title="Sentences"/>
      <LevelCourse course_icon={action}
                   course_icon_name="action_course_icon"
                   singleCoursePath="/single_course_action"
                   title="Action"/>
      <LevelCourse course_icon={seasons}
                   course_icon_name="seasons_course_icon"
                   singleCoursePath="/single_course_seasons"
                   title="Seasons"/>
      <Footer />
  </div>
)

export default CoursesPage;
