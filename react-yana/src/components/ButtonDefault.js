import React from 'react';
import { Link } from 'react-router-dom'

const ButtonDefault = ({title, buttonPath}) => (
     <button className="btn button-Default">
       <Link className="button-default-link" to={buttonPath}>{title}</Link>
     </button>
)

export default ButtonDefault;
