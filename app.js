import React from 'react';
import AppActions from '../actions/app-actions'

export default class App extends React.Component {
  render() {
    return <h1 onClick={AppActions.removeItem.bind(null, 'someItem')}>React Flux Architecture</h1>
  }
}
