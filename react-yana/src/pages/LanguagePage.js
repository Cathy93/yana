import React from 'react'
import BrazilFlag from '../img/brazil_lg.png';
import MacedonianFlag from '../img/macedonia_lg.png';

import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import LevelCourse from '../components/LevelCourse';




const  LanguagePage= () => (
  <div>
    <MainHeader title="Languages"/>
    <LevelCourse course_icon={BrazilFlag}
                 course_icon_name="Brazilian_flag"
                 singleCoursePath="/courses"
                 title='Brazilian Portuguese'/>

   <LevelCourse course_icon={MacedonianFlag}
                course_icon_name="Macedonia_flag"
                singleCoursePath="/courses"
                title='Macedonian'/>
    <Footer />
  </div>
)
export default LanguagePage;
