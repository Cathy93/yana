import React from 'react'
import { Image } from 'react-bootstrap';

const Thumbnails = ({course_icon,
                      course_icon_alt,
                      titleOne,
                      titleTwo}) => (
  <div className="thumbnail-wrapper">
    <Image className="img-center" src={course_icon} alt={course_icon_alt} rounded responsive/>
    <div className="title-wrapper">
      <h3 className="course-description text-center">{titleOne}</h3>
      <p className="course-description text-center">{titleTwo}</p>
    </div>
 </div>
)

export default Thumbnails;
