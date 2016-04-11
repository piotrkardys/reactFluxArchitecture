import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';
import CartAPI from '../api/CartAPI';

const CHANGE_EVENT = 'change'

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

  getCart() { return CartAPI.cartItems; },                             //returns what is in the cart
  getCatalog() { return CartAPI.getCatalog(); },
  getCartTotals() {
    return CartAPI.cartTotals();
  },
  dispatcherIndex: register(function(action) {                    //links Constants with the store methods
    switch(action.actionType) {
      case AppConstants.ADD_ITEM: CartAPI.addItem(action.item); break;
      case AppConstants.REMOVE_ITEM: CartAPI.removeItem(action.item); break;
      case AppConstants.INCREASE_ITEM: CartAPI.increaseItem(action.item); break;
      case AppConstants.DECREASE_ITEM: CartAPI.decreaseItem(action.item); break;
    }

    AppStore.emitChange();
  })
});

export default AppStore
