import React from 'react';
import LeftIconComponent from './LeftIconComponent';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import CloseXComponent from './CloseXComponent';

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
			<LeftIconComponent />
			<TextComponent>We'd love to hear from you</TextComponent>
			<ButtonComponent>Send message</ButtonComponent>
			<CloseXComponent />
		</div>
	);
};
//
export default Toolbar;