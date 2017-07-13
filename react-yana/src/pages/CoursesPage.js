// Dependencies
import React from 'react'

// Components
import MainHeader from '../components/MainHeader';
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import {
  languageIDToNames, languageIDToFlagImages
} from '../content/languages'

// Img
import animal from '../img/animal.png';


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
        <LevelCourse course_icon={course.courseImage}
                     course_icon_name="animal_course_icon"
                     path={`/languages/${this.props.languageId}/courses/${course.courseName}`}
                     title={course.courseName}/>

      </div>
    );
  }

  render() {
    return (<div>
      <MainHeader title={ languageIDToNames[this.props.languageId] }/>
      {this.renderLevels()}
      <Footer />
    </div>);
  }
}
export default CoursesPage;
