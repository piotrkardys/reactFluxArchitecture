import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change'

var _catalog = [];                      //catalog of the shop products

for (let i = 1; i < 9; i++) {           //fills the catalog with widgets
  _catalog.push({
    'id': 'widget' + i,
    'title': 'widget #' + i,
    'summary': 'A great widget',
    'description': 'Some description'
    'cost': i
  });
}

var cartItems = [];                    //customer's cart

const _removeItem = (item) => {        //remove picked item
  _cartItems.splice(_cartItems.findIndex(i => i === item), 1);    //forEach element - check index with the item's index
};

const _findCartItem = (item) => {     //find item in the cart
  return _cartItems.find(cartItem => cartItem.id === item.id)
};

const _increaseItem = (item) => item.qty++;

const _decreaseItem = (item) => {
  item.qty--;
  if (item.qty === 0) {                 //if there are less than 0 items - remove
    _removeItem(item)
  }
};

const _addItem = (item) => {
  const cartItem = _findCartItem(item);     //check if there is that product in the cart already
  if (!cartItem) {
    _cartItems.push(Object.assign({qty: 1}, item));
  }
  else {
    _increaseItem(cartItem);
  }
};

const _cartTotals = (qty = 0, total = 0) => {           //tells us what's in the cart (total amount and cost)
  _cartItems.forEach(cartItem => {
    qty += cartItem.qty;
    total += cartItem.qty * cartItem.cost;
  });
  return {qty, total};
};

const AppStore = Object.assign(EventEmitter.prototype, {          //extends the object with new properties
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart() { return _cartItems; },                             //returns what is in the cart
  getCatalog() {
    return _catalog.map(item => {
      return Object.assign( {}, item, _cartItems.find(cItem => cItem.id === item.id))
    })
  },
  getCartTotals() {
    return _cartTotals();
  },
  dispatcherIndex: register(function(action) {                    //links Constants with the store methods
    switch(action.actionType) {
      case AppConstants.ADD_ITEM: _addItem(action.item); break;
      case AppConstants.REMOVE_ITEM: _removeItem(action.item); break;
      case AppConstants.INCREASE_ITEM: _increaseItem(action.item); break;
      case AppConstants.DECREASE_ITEM: _decreaseItem(action.item); break;
    }

    AppStore.emitChange();
  })
});

export default AppStore
