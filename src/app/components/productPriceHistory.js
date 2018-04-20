import React, { Component } from 'react';
import ProductList from './Product/ProductList';

export default class productPriceHistory extends Component {
   render() {
      return (
         <div>
              <ProductItemBox />
              <ProductList />
         </div>
      );
   }
}
