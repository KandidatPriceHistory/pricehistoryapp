import React, { Component } from 'react';
import Product from './Product';
import Home from './Home';
import productPriceHistory from './productPriceHistory';

// Imports for routing
import { Route } from 'react-router'

export default class AppComponent extends Component {
   render() {
      return (
         <div>
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/productpricehistory" component={productPriceHistory} />
         </div>
      );
   }
}
