import React from 'react';
import CartSummary from './app-cartsummary';
                                    //header of the pages
export default () => {
  return (                         //CartSummary is the button to go to the 'Cart Summary' page
    <div className="row" style={{borderBottom: '3px dashed #cccccc'}}>
      <div className="col-sm-2"><h1>Store</h1></div>
      <div className="col-sm-10 text-right">
        <CartSummary />
      </div>
    </div>
  )
}
