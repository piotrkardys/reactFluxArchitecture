import React from 'react';
//import AppActions from '../actions/app-actions';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import Template from './app-template';
import {Router, Route, IndexRoute} from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>                 //path to the main page
        <IndexRoute component={Catalog} />                  //main page component
        <Route path="cart" component={Cart} />              //path and component on subpage
      </Route>
    </Router>
  )
}

//export default class App extends React.Component {
//  render() {
//    return (
//      <div className="containter">
//        <Catalog />
//        <Cart />
//      </div>
//    )
//  }
//}
