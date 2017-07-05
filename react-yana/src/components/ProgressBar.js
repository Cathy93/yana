import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const now = 50;

const ProgressB = ({CurrentLevel}) => (
  <div>
   <ProgressBar bsStyle="success"
                striped
                now={CurrentLevel}
                label={`${now}%`} />
 </div>
)

export default ProgressB;
