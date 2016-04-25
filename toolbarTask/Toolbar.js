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
			<LeftIconComponent>{props.info.icon}</LeftIconComponent>
			<TextComponent>{props.info.text}</TextComponent>
			<ButtonComponent>{props.info.textButton}</ButtonComponent>
			<CloseXComponent update={props.update}/>
		</div>
	);
};
//

Toolbar.propTypes = {
	info: React.PropTypes.object.isRequired
}

export default Toolbar;