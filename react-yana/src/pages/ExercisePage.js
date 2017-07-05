// Dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import Mosaic from 'mosaic-audio';

// Components
import Footer from '../components/Footer'

// Img
import Animal from '../img/platypus.png'
import Thumbnails from '../components/Thumbnails'
import ButtonDefault from '../components/ButtonDefault'
import ProgressB from '../components/ProgressBar'

const ExercisePage = () => (
  <div>

    <Thumbnails
      course_icon={Animal}
      course_icon_alt="animal_icon"
      titleOne="Ornitorrinco"
      titleTwo ="Platypus"
    />

    <Mosaic
      hover={true}
      margin={false}
      playClass="fa fa-volume-up audio"
      pauseClass="fa fa-volume-up audio"
      source="p.wav"
    />

    <div className="button-wrapper" >
      <ButtonDefault title="Next"
        buttonPath="/exercise:id" />
    </div>
    <ProgressB CurrentLevel={50} />
    <Footer />
  </div>
)

export default ExercisePage;
