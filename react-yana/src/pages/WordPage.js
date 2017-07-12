// Dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import Mosaic from 'mosaic-audio';

// Components
import Footer from '../components/Footer'

// Img
import Animal from '../img/platypus.png'
import Thumbnails from '../components/Thumbnails'
import ActionButton from '../components/ActionButton'
import ProgressBar from '../components/ProgressBar'

const WordPage = ({word, nextWord,}) => (
  <div>

    <Thumbnails
      course_icon={Animal}
      course_icon_alt="animal_icon"
      titleOne={word.title["s35"]}
      titleTwo ={word.title["eng"]}
    />

    <Mosaic
      hover={true}
      margin={false}
      playClass="fa fa-volume-up audio"
      pauseClass="fa fa-volume-up audio"
      source="p.wav"
    />

    <div className="button-wrapper" >
      <ActionButton title="Next"
        onClick={nextWord} />
    </div>
    <ProgressBar CurrentLevel={25} />
    <Footer />
  </div>
)

export default WordPage;
