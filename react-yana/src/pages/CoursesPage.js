// Dependencies
import React from 'react'
// Components
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import { groupBy } from 'underscore'

import {
  languageIDs, languageIDToNames, languageIDToFlagImages
} from '../content/languages'


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
          this.setState({levels: groupBy(courses, 'level')});
        })
        .catch(function(err) {
          console.log("Didn't connect to the API", err)
        });
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
      <h1 className="home-heading-text text-center">{languageIDToNames[this.props.languageId]}</h1>
      {this.renderLevels()}
      <Footer />
    </div>);
  }
}
export default CoursesPage;
