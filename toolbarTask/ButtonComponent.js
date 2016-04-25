import React from 'react';

export default (props) => {
	const buttonStyle = {
		backgroundColor: '#33cccc',
		marginTop: '2px'
	};
	return (
		<button style={buttonStyle} className="col-sm-2 col-md-1 btn btn-sm" onClick={() => { console.log('Sent!') }}>
			<strong>{props.children}</strong>
		</button>
	)
};