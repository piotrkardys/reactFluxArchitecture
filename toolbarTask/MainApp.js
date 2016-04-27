import React from 'react';
import Toolbar from './Toolbar';

const buttonStyle = {
	backgroundColor: '#555555',
	position: 'absolute',
	top: '100px',
	left: '20px',
	color: '#ffffff'
};

const toolbarInfoJSON = {
	icon: 'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png',
	text: `We'd love to hear from you`,
	textButton: 'Send message'
};

class MainApp extends React.Component {
	constructor() {
		super();
		this.state = { open: false };
		this.update = this.update.bind(this);
		this.buttonClickedChange = this.buttonClickedChange.bind(this);
	}
	update() {
		this.setState({ open: !this.state.open });
	}
	buttonClickedChange(buttonName) {
		alert(buttonName.target.value);
		//console.log(buttonName.target.value);
	}

	render() {
		if (this.state.open) {
			return (
				<div>
					<Toolbar info={toolbarInfoJSON} update={this.update} buttonClickedChange={this.buttonClickedChange} />
					<button style={buttonStyle} className="col-sm-2 col-md-1 btn btn-sm" onClick={this.update}><strong>Hide Toolbar</strong></button>
				</div>
			)
		}
		else {
			return (
				<div>
					<button style={buttonStyle} className="col-sm-2 col-md-1 btn btn-sm" onClick={this.update}><strong>Show Toolbar</strong></button>
				</div>
			)
		}
	}
}


export default MainApp;