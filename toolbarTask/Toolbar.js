import React from 'react';


const Toolbar = (props) => {
	const divStyle = {
		backgroundColor: '#555555', 
		color: 'white', 
		height: '35px', 
		fontSize: '1.5em',
		paddingLeft: '35px'
	}

	return (
		<div className="row" style={divStyle}>
			{props.info}
		</div>
	);
};
//
export default Toolbar;