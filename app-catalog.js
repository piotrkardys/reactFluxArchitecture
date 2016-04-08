import React from 'react';
import AppStore from '../stores/app-store';
import CatalogItem from './app-catalogitem';
                                              //Catalog - containter of the Catalog Items
function getCatalog() {                       //returns Catalog
  return {items: AppStore.getCatalog()}
}

class Catalog extends React.Component {       //class Catalog
  constructor() {
    super();
    this.state = getCatalog()                 //state field which is Catalog of all store items
  }

  render() {
    let items = this.state.items.map(item => {          //foreach catalog item returns component of catalog item
      return <CatalogItem key={item.id} item={item} />
    });
    return <div className="row"> {items} </div>         //returns HTML element - row of items
  }
}

export default Catalog;
