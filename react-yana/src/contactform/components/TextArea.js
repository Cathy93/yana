import React from 'react';

const TextArea = ({ title, resize, name, inputType, rows, content, controlFunc, placeholder }) => (

  <div className="form-group row">
  		<label className="col-sm-2 col-form-label">{title}</label>
      <div className="col-sm-10">
          <textarea className="form-control"
        			style={resize ? null : {resize: 'none'}}
        			name={name}
              type={inputType}
        			rows={rows}
        			value={content}
        			onChange={controlFunc}
        			placeholder={placeholder} />
      </div>
  </div>
);

  TextArea.propTypes = {
      inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
    	title: React.PropTypes.string.isRequired,
    	rows: React.PropTypes.number.isRequired,
    	name: React.PropTypes.string.isRequired,
      content: React.PropTypes.oneOfType([
      		React.PropTypes.string,
      		React.PropTypes.number,
    	]).isRequired,
    	resize: React.PropTypes.bool,
    	placeholder: React.PropTypes.string,
    	controlFunc: React.PropTypes.func.isRequired
  };

export default TextArea;
