import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const ProgressB = ({CurrentLevel}) => (
  <div>
   <ProgressBar bsStyle="success"
                striped
                now={CurrentLevel}
                label={`${CurrentLevel}% Complete`} />
 </div>
)

export default ProgressB;
