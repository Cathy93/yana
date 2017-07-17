import React from 'react';

const ActionButton = ({title, onClick}) => (
  <div className="button-container text-center">
     <button className="btn action-btn" onClick={onClick}>{title}</button>
 </div>
)

export default ActionButton;
