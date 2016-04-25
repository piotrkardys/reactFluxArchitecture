import React from 'react';

export default (props) => {
	const imgStyle = {
		width: '65px',
		height: '35px'
	};
	return <img style={imgStyle} className="col-sm-1" src={props.children} />
};