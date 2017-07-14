// Dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import Mosaic from 'mosaic-audio';

// Components
import Footer from '../components/Footer'

// Img
import Thumbnails from '../components/Thumbnails'
import ActionButton from '../components/ActionButton'
import ProgressBar from '../components/ProgressBar'

const WordPage = ({word, nextWord, languageId}) => (
  <div>

    <Thumbnails
      course_icon={word.image}
      course_icon_alt="animal_icon"
      titleOne={word.title[languageId]}
      titleTwo ={word.title["eng"]}
    />


    <Mosaic
      hover={true}
      margin={false}
      playClass="fa fa-volume-up audio"
      pauseClass="fa fa-volume-up audio"
      source={word.audio}
    />

    <div className="button-wrapper" >
      <ActionButton className="button-thin" title="Next"
        onClick={nextWord} />
    </div>
    <h2>{languageId}</h2>
    <ProgressBar CurrentLevel={25} />
    <Footer />
  </div>
)

export default WordPage;
