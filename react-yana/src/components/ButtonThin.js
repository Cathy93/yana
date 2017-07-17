import React from 'react';
import { Link } from 'react-router-dom'

const ButtonThin = ({title, buttonPath}) => (
  <div className="button-container text-center">
    <Link to={buttonPath}>
      <button className="btn action-btn">{title}</button>
    </Link>
 </div>
)

export default ButtonThin;
