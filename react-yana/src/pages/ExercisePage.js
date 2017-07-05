import React from 'react'
import Footer from '../components/Footer'
import Animal from '../img/platypus.png'
import Thumbnails from '../components/Thumbnails'

const ExercisePage = () => (
  <div>

    <Thumbnails
      course_icon={Animal}
      course_icon_alt="animal_icon"
      titleOne="Ornitorrinco"
      titleTwo ="Platypus"
    />
    <Footer />
  </div>
)

export default ExercisePage;
