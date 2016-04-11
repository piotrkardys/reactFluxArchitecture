import React from 'react'
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import {Link} from 'react-router';
                                              //Catalog Item - single item in catalog
export default (props) => {                   //stateless component
  let itemStyle = {borderBottom: '3px dashed #cccccc',  //the style variable
                   paddingBottom: 15}
    return (
      <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
        <h4>{props.item.title}</h4>
        <img src="https://slicenlife.files.wordpress.com/2013/05/banana-250x250.jpg" width="100%" className="img-responsive" />
        <p>{props.item.summary}</p>
        <p>${props.item.cost}
          <span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
        </p>
        <div className="btn-group">
          <Link to={`/item/${props.item.id}`} className="btn btn-default btn-sm">Learn More</Link>
          <CartButton handler={AppActions.addItem.bind(null, props.item)} txt="Add To Cart"/>
        </div>
      </div>
    )
}
