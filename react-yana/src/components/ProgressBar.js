import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const ProgressB = ({currentLevel}) => (
  <div>
   <ProgressBar bsStyle="success"
                striped
                now={currentLevel}
                label={`${currentLevel}%`} />
 </div>
)

export default ProgressB;
