import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Footer from '../components/Footer';
import LevelCourse from '../components/LevelCourse';
import CoursesPage from './CoursesPage'
import SingleCoursePage from './SingleCoursePage'
import {
  languageIDs, languageIDToNames, languageIDToFlagImages
} from '../content/languages'

const  LanguagesPage = () => (
  <div>
    <h1 className="home-heading-text text-center">Languages</h1>
    {
      languageIDs.map((languageId) =>
        <LevelCourse
          languageID={languageId}
          course_icon={ languageIDToFlagImages[languageId] }
          path={ `/languages/${languageId}` }
          title={ languageIDToNames[languageId] }
        />
      )
    }
  </div>
  )



export default LanguagesPage;
