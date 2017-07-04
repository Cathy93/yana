import React from 'react';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';

const LevelCourse = ({course_icon, course_icon_name, singleCoursePath, title}) => (
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
       <Link to={singleCoursePath}>
          <Image src={course_icon} alt={course_icon_name} rounded responsive/>
          <h5 className="course-name-title">{title}</h5>
       </Link>
 </div>
)

export default LevelCourse;
