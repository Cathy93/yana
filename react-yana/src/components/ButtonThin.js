import React from 'react';
import { Link } from 'react-router-dom'

const ButtonThin = ({title, buttonPath}) => (
  <div className="button-container text-center">
     <button className="btn button-thin">
       <Link to={buttonPath}>{title}</Link>
     </button>
 </div>
)

export default ButtonThin;
