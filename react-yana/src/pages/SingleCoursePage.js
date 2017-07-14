import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse';
import ActionButton from '../components/ActionButton';
import Footer from '../components/Footer';
import WordPage from '../pages/WordPage';


import animal from '../img/animal.png';

class SingleCoursePage extends React.Component {
  // Act as initialize in ruby
  constructor(props) {
    // with props recive characteristic from father(who calls him)
    super(props);
    this.state = { course: null, currentWordIndex: null };
  }

  componentDidMount() {
    var url = "http://localhost:8000/api/courses/" + this.props.courseName;

    fetch(url)
      .then(results => results.json())
      .then(course => {
        this.setState({course: course});
      })
      .catch(function(err) {
        console.log("Didn't connect to the API", err)
      });
  }

  nextWord = () => {
    const nextIndex = (this.state.currentWordIndex || 0) + 1;
    this.setState({currentWordIndex: nextIndex });
  }

  currentWord = () => {
    const course = this.state.course;
    const wordIndex = this.state.currentWordIndex;

    if(!course || !wordIndex) {
      return null;
    }

    return course.words[wordIndex];
  }

  render() {
    const course = this.state.course;
    const currentWord = this.state.currentWord;

    if(!course) {
      return (<div>Loading</div>);
    }

  const languageID = this.props.languageId
   const allWords = course.words
   const languageWords = allWords.filter(word => {
   const wordHasLanguage = !!word.title[languageID]
     return wordHasLanguage // Keep if true, remove if false
   }) // filter down allWords to your language
   const totalWords = languageWords.length

    if(!this.currentWord()) {
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
            <ActionButton title="Start" onClick={this.nextWord} />
          </div>
          <Footer />
        </div>
      );
    } else {
      return <WordPage
              word={this.currentWord()}
              nextWord={this.nextWord}
              languageId={this.props.languageId} />

    }
  }
}

export default SingleCoursePage;
