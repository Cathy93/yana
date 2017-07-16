import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'
import WordPage from '../pages/WordPage'
import CourseCover from '../components/CourseCover'


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
    this.setState((prevState) =>{
      if (prevState.currentWordIndex == null) {
        return { currentWordIndex: 0 }
      }
      else {
        return { currentWordIndex: prevState.currentWordIndex + 1 }
      }
    });
  }

  currentWord = () => {
    const course = this.state.course;
    const wordIndex = this.state.currentWordIndex;

    // !null == true
    // !0 == true

    if(!course || wordIndex == null) {
      return null;
    }

    return course.words[wordIndex];
  }

  render() {
    const course = this.state.course;

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
      return <CourseCover course={course}
                          nextWord={this.nextWord}
                          languageId={this.props.languageId}
                          totalWords={totalWords} />

    } else {
      return <WordPage
              word={this.currentWord()}
              nextWord={this.nextWord}
              languageId={this.props.languageId} />
    }
  }
}

export default SingleCoursePage;
