import React from 'react';

export default (props) => {
	const textStyle = {
		textAlign: 'right'
	};
	return <div style={textStyle} className="col-sm-5">{props.children}</div>
};