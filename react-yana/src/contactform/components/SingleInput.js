import React from 'react';

const SingleInput = ({ title, name, inputType, content, controlFunc, placeholder }) => (
  	<div className="form-group row">
    		<label className="col-sm-2 col-form-label">{title}</label>
        <div className="col-sm-10">
            <input className="form-control"
        			name={name}
        			type={inputType}
        			value={content}
        			onChange={controlFunc}
        			placeholder={placeholder} />
          </div>
  	</div>
);

SingleInput.propTypes = {
  	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
  	title: React.PropTypes.string.isRequired,
  	name: React.PropTypes.string.isRequired,
  	controlFunc: React.PropTypes.func.isRequired,
  	content: React.PropTypes.oneOfType([
    		React.PropTypes.string,
    		React.PropTypes.number,
  	]).isRequired,
  	placeholder: React.PropTypes.string,
};

export default SingleInput;
