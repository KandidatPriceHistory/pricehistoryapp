import React, { Component } from 'react';
import Product from './Product';
import Home from './Home';
import productPriceHistory from './productPriceHistory';
import wrongPath from './wrongPath'

// Imports for routing
import { Route } from 'react-router'

export default class AppComponent extends Component {


   render() {
      return (
         <div>
            <Route exact path="/product" component={Product} />
            <Route exact path="/" component={Home} />
            <Route exact path="/productpricehistory" component={productPriceHistory} />
            <Route exact path="/wrong" component={wrongPath} />
         </div>
      );
   }
}
