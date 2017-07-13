import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse';
import ButtonThin from '../components/ButtonThin';
import Footer from '../components/Footer';
import { languageIDs } from '../content/languages'

class SingleCoursePage extends React.Component {
  // Act as initialize in ruby
  constructor(props) {
    // with props recive characteristic from father(who calls him)
    super(props);
    this.state = { course: null };
  }

  componentDidMount() {
    var url = "http://localhost:8000/api/courses/" + this.props.courseID;

    fetch(url)
      .then(results => results.json())
      .then(course => {
        this.setState({course: course});
      })
      .catch(function(err) {
        console.log("Didn't connect to the API", err)
      });
  }

  render() {
    const course = this.state.course;
    if(!course) {
      return (<div>Loading</div>);
    }

    const languageID = this.props.languageID
    const allWords = course.words
    const languageWords = allWords.filter(word => {
      const wordHasLanguage = !!word.title[languageID]
      return wordHasLanguage // Keep if true, remove if false
    }) // filter down allWords to your language
    const totalWords = languageWords.length

    return (
      <div>
        <MainHeader title={course.courseName}/>

        <LevelCourse course_icon={course.courseImage}
                     course_icon_name="animal_course_icon"
                     path='/bla'
                     title=""/>

        <h3 className="course-description text-center">Level: {course.level} </h3>
        <p className="course-description text-center">Words: {totalWords}</p>

        <div className='button-wrapper'>
          <ButtonThin title="Start"
                       buttonPath="/animal_exercise_page" />
         </div>
         <Footer />
      </div>
    );
  }
}



export default SingleCoursePage;
