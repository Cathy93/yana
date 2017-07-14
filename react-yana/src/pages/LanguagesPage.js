import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import LevelCourse from '../components/LevelCourse';
import CoursesPage from './CoursesPage'
import SingleCoursePage from './SingleCoursePage'
import {
  languageIDs, languageIDToNames, languageIDToFlagImages
} from '../content/languages'


const  LanguagePage = (  ) => (
  <div>
    <MainHeader title="Languages"/>
      {languageIDs.map(languageID =>
        <LevelCourse
            languageID={languageID}
            course_icon={ languageIDToFlagImages[languageID] }
            path={ `/languages/${languageID}` }
            title={ languageIDToNames[languageID] }
        />)
      }
  </div>
)

export default LanguagePage;