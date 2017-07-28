import React from 'react'
import Footer from '../components/Footer';
import LevelCourse from '../components/LevelCourse';
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
      <Footer />
  </div>
  )



export default LanguagesPage;
