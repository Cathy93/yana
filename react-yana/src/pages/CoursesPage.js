// Dependencies
import React from 'react'

// Components
import MainHeader from '../components/MainHeader';
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';

// Img
import animal from '../img/animal.png';
import color from '../img/color.png';
import number from '../img/number.png';
import greetings from '../img/greetings.png';
import food from '../img/food.png';
import family from '../img/family.png';
import sentences from '../img/sentence.png';
import action from '../img/action.png';
import seasons from '../img/seasons.png';

class CoursesPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {levels: []};
  }

  componentDidMount() {
    var url = "http://localhost:8000/api/courses"
      fetch(url)
        .then(results => results.json())
        .then(courses => {
          this.setState({levels: this.groupBy(courses, 'level')});
        })
        .catch(function(err) {
          console.log("Didn't connect to the API", err)
        });
  }

  groupBy(collection, attribute) {
    return collection.reduce((groups, elem) => {
      (groups[elem[attribute]] = groups[elem[attribute]] || []).push(elem);
      return groups;
    }, {});
  }

  renderLevels() {
    return Object.keys(this.state.levels).map((level) =>
      <div>
        <SubHeading title={"Level " + level}/>
        <div className="row">
          {this.renderCourses(this.state.levels[level])}
        </div>
      </div>
    );
  }

  renderCourses(courses) {
    return courses.map((course) =>
      <div className="col-xs-4 col-sm-4 mb20" key={course._id}>
        <LevelCourse course_icon={animal}
                     course_icon_name="animal_course_icon"
                     path={`/courses/${course._id}`}
                     title={course.courseName}/>
      </div>
    );
  }

  render() {
    return (<div>
      <MainHeader title="Portuguese"/>
      {this.renderLevels()}
      <Footer />
    </div>);
  }
}
export default CoursesPage;
