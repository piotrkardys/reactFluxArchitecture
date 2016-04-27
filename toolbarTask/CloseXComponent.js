import React from 'react';

const buttonStyle = {
	marginTop: '2px',
	textAlign: 'right',
	color: '#bbbbbb',
	cursor: 'pointer',
	float: 'right'
};

class CloseXComponent extends React.Component {
	render() {
		return <div style={buttonStyle} className="col-sm-1" onClick={this.props.update}>X</div>
	}
};

export default CloseXComponent;