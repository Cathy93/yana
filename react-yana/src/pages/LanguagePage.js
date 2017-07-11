import React from 'react'
import BoonwurrungFlag from '../img/boonwurrung_flag.png';
import WoiwurrungFlag from '../img/woiwurrung_flag.png';

import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import LevelCourse from '../components/LevelCourse';

const  LanguagePage= () => (
  <div>

  <MainHeader title="Languages"/>
  <LevelCourse course_icon={BoonwurrungFlag}
               course_icon_name="Boonwurrung_flag"
               path="/courses"
               title='Boonwurrung'/>

    <LevelCourse course_icon={WoiwurrungFlag}
                 course_icon_name="woiwurrung_flag"
                 path="/courses"
                 title='Woiwurrung'/>

    <Footer />
  </div>
)
export default LanguagePage;
