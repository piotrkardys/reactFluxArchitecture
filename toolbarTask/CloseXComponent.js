import React from 'react';

export default (props) => {
	const buttonStyle = {
		marginTop: '2px',
		textAlign: 'right',
		color: '#bbbbbb',
		cursor: 'pointer',
		float: 'right'
	};
	return <div style={buttonStyle} className="col-sm-1" onClick={props.update}>X</div>
};