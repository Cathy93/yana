import React from 'react'
import MainHeader from '../components/MainHeader'
import LevelCourse from '../components/LevelCourse';
import ButtonThin from '../components/ButtonThin';
import Footer from '../components/Footer';
import animal from '../img/animal.png';

class SingleCoursePage extends React.Component {
  // Act as initialize in ruby
  constructor(props) {
    // with props recive characteristic from father(who calls him)
    super(props);
    console.log(props);
    this.state = { id: props.courseId };
  }

  componentDidMount() {
    var url = "http://localhost:8000/api/courses/" + this.state.id;

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

    return (
      <div>
        <MainHeader title={course.courseName}/>

        <LevelCourse course_icon={animal}
                     course_icon_name="animal_course_icon"
                     path='/bla'
                     title=""/>

        <h3 className="course-description text-center">Level: {course.level} </h3>
        <p className="course-description text-center">Words: {course.words.length}</p>

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
