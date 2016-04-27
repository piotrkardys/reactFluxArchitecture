import React from 'react';

const buttonStyle = {
	backgroundColor: '#33cccc',
	marginTop: '2px'
};

class ButtonComponent extends React.Component {
	render() {
		return (
			<button 
				style={buttonStyle} 
				value={this.props.children} 
				className="col-sm-2 col-md-1 btn btn-sm" 
				onClick={this.props.buttonClickedChange}>

				<strong>{this.props.children}</strong>
				
			</button>
		)
	}
};

export default ButtonComponent;