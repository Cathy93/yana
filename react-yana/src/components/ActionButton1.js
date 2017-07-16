import React from 'react';

const ActionButton1 = ({title, onClick}) => (
  <div className="button-container text-center">
     <button className="btn button-thin" onClick={onClick}>
       {title}
     </button>

 </div>
)

export default ActionButton1;
