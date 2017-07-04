import React from 'react';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';

const LevelCourse = ({course_icon, course_icon_name, singleCoursePath, title}) => (
  <div>
       <Link className="img-link" to={singleCoursePath}>
          <Image className="mx-auto d-block" src={course_icon} alt={course_icon_name} rounded responsive/>
          <h5 className="course-name-title">{title}</h5>
       </Link>
 </div>
)

export default LevelCourse;
