import React from 'react';
import AppStore from '../stores/app-store.js';

export default (InnerComponent, stateCallback) => class extends React.Component { //higher-order component which gets the inner component
  constructor(props) {                              //constructor of the InnerComponent - sets the fields
    super(props);
    this.state = stateCallback(props);
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    AppStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(stateCallback(this.props))
  }

  render() {
    return <InnerComponent {...this.state} {...this.props} /> //returns other component 
  }
}
