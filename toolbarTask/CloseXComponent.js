import React from 'react';

const onCloseClick = () => {
	console.log('You clicked the X!');
};

export default () => {
	const buttonStyle = {
		marginTop: '2px',
		textAlign: 'right',
		color: '#bbbbbb',
		cursor: 'pointer',
		float: 'right'
	};
	return <div style={buttonStyle} className="col-sm-1" onClick={onCloseClick}>X</div>
};