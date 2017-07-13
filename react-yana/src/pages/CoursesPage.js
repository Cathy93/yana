// Dependencies
import React from 'react'
// Components
import MainHeader from '../components/MainHeader';
import LevelCourse from '../components/LevelCourse';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
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
    const { match } = this.props
    const languageID = match.params.languageID
    return courses.map((course) =>
      <div className="col-xs-4 col-sm-4 mb20" key={course._id}>
        <LevelCourse course_icon={course.courseImage}
                     course_icon_name="animal_course_icon"
                     path={`/languages/${languageID}/courses/${course._id}`}
                     title={course.courseName}/>
       <h3>{course.words[0].title.s35 }</h3>
      </div>
    );
  }

  render() {
    const { match } = this.props
    const languageID = match.params.languageID
    return (<div>
      <MainHeader title={ languageIDToNames[languageID] }/>
      <h3>languageID chosen: { languageID }</h3>
      {this.renderLevels()}
      <Footer />
    </div>);
  }
}
export default CoursesPage;
