import React from 'react';
import {ProgressBar} from 'react-bootstrap'


const ProgressB = ({TotalLevels, CurrentLevel}) => (
  <div className="progress-bar-css">
   <ProgressBar bsStyle="success" striped now={CurrentLevel} />
 </div>
)

export default ProgressB;
