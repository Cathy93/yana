import React from 'react'
import Footer from '../components/Footer'
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
    <i className="fa fa-volume-up audio" aria-hidden="true"></i>
    <div className="button-wrapper" >
      <ButtonDefault title="Next"
        buttonPath="/exercise:id" />
    </div>
    <ProgressB CurrentLevel={50} />
    <Footer />
  </div>
)

export default ExercisePage;
