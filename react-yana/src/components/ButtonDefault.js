import React from 'react';
import { Link } from 'react-router-dom'

const ButtonDefault = ({title, buttonPath}) => (
  <div className="button-container text-center">
    <button className="btn learn-now-button">
      <Link to={buttonPath}>{title}</Link>
    </button>    
 </div>
)

export default ButtonDefault;
