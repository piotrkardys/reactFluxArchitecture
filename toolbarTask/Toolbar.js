import React from 'react';
import LeftIconComponent from './LeftIconComponent';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import CloseXComponent from './CloseXComponent';

const divStyle = {
	backgroundColor: '#555555', 
	color: 'white', 
	height: '35px', 
	fontSize: '1.5em',
	paddingLeft: '35px'
};

class Toolbar extends React.Component {
	render() {
		return (
			<div className="row" style={divStyle}>
				<LeftIconComponent>{this.props.info.icon}</LeftIconComponent>
				<TextComponent>{this.props.info.text}</TextComponent>
				<ButtonComponent buttonClickedChange={this.props.buttonClickedChange}>{this.props.info.textButton}</ButtonComponent>
				<CloseXComponent update={this.props.update}/>
			</div>
		)
	}
};

Toolbar.propTypes = {
	info: React.PropTypes.object.isRequired
};

export default Toolbar;