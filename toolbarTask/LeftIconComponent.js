import React from 'react';

const imgStyle = {
	width: '65px',
	height: '35px'
};

class LeftIconComponent extends React.Component {
	render() {
		return <img style={imgStyle} className="col-sm-1" src={this.props.children} />
	}
};

export default LeftIconComponent;