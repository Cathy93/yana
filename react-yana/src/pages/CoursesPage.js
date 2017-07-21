// Dependencies
import React from 'react'
// Components
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import { groupBy } from 'underscore';
import * as coursesAPI from '../api/courses';

import {
  languageIDs, languageIDToNames, languageIDToFlagImages
} from '../content/languages'


class CoursesPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {levels: []};
  }

  componentDidMount() {
      coursesAPI.list()
        .then(courses => {
          const levels = groupBy(courses, 'level')
          this.setState({levels: levels });
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
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" key={course._id}>
        <LevelCourse course_icon={course.courseImage}
                     course_icon_name="animal_course_icon"
                     path={`/languages/${this.props.languageId}/courses/${course.courseName}`}
                     title={course.courseName}/>
      </div>
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
