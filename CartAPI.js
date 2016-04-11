const CartAPI = {
  catalog: [],                      //catalog of the shop products
  cartItems: [],                    //customer's cart
  removeItem(item) {                //remove picked item
    this.cartItems.splice(this.cartItems.findIndex(i => i === item), 1); //forEach element - check index with the item's index
  },
  findCartItem(item) {              //find item in the cart
    return this.cartItems.find(cartItem => cartItem.id === item.id)
  },
  increaseItem(item) {
    item.qty++;
  },
  decreaseItem(item) {
    item.qty--;
    if (item.qty === 0) {               //if there are less than 0 items - remove
      this.removeItem(item)
    }
  },
  addItem(item) {
    const cartItem = this.findCartItem(item); //check if there is that product in the cart already
    if (!cartItem) {
      this.cartItems.push(Object.assign({qty: 1}, item));
    }
    else {
      this.increaseItem(cartItem);
    }
  },
  cartTotals(qty = 0, total = 0) {        //tells us what's in the cart (total amount and cost)
    this.cartItems.forEach(cartItem => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost;
    });
    return {qty, total};
  },
  getCatalog() {
    return this.catalog.map(item => {
      return Object.assign( {}, item, this.cartItems.find(cItem => cItem.id === item.id))
    })
  },
  init() {
    for (let i = 1; i < 9; i++) {             //fills the catalog with widgets
      this.catalog.push({
        'id': 'banana' + i,
        'title': 'banana no' + i,
        'summary': 'A great banana',
        'description': 'Some description',
        'cost': i
      });
    }
  }
}

CartAPI.init();
export default CartAPI;
