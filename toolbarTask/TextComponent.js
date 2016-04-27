import React from 'react';

const textStyle = {
	textAlign: 'right'
};

class TextComponent extends React.Component {
	render() {
		return <div style={textStyle} className="col-sm-5">{this.props.children}</div>
	}
};

export default TextComponent;