import React from 'react';
import AppStore from '../stores/app-store';
import AppCartItem from './app-cart-item';
import StoreWatchMixin from '../mixins/StoreWatchMixin';
                                      //Cart - container of the elements in the cart
const cartItems = () => {             //returns all items in the Cart
  return {items: AppStore.getCart()}
}

//class Cart extends React.Component {
//  constructor() {
//    super();
//    this.state = cartItems();
//    this._onChange = this._onChange.bind(this);       //update method
//  }
//  componentWillMount() {                              //if Cart is creating we add Listener in AppStore which calls _onChange method
//    AppStore.addChangeListener(this._onChange)
//  }
//  componentWillUnmount() {
//    AppStore.removeChangeListener(this._onChange)
//  }
//  _onChange() {
//    this.setState(cartItems)                          //sets state of the Cart
//  }

//  render() {
const Cart = (props) => {
  var total = 0;
  var items = props.items.map((item, i) => {   //items - container of item records on the Cart
    let subtotal = item.cost * item.qty;
    total += subtotal;
    return (
      <AppCartItem subtotal={subtotal} key={i} item={item} />
    )
  });
  return (
    <div>
      <h1>Cart</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
//}
}

export default StoreWatchMixin(Cart, cartItems);
