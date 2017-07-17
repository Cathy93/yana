import React from 'react';
import { Link } from 'react-router-dom'

const ButtonDefault = ({title, buttonPath}) => (
  <div className="button-container text-center">
    <Link to={buttonPath}>
      <button className="btn action-btn-home">{title}</button>
    </Link>
 </div>
)

export default ButtonDefault;
