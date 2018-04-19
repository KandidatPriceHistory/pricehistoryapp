import React, { Component } from 'react';
import Header from "./Header/Header";
import Graph from "./Graph/Graph"
import ProductList from "./Product/ProductList"
import Factbox from "./Factbox/Factbox"

export default class AppComponent extends Component {
   render() {
      return (
         <div>
              <Header />
              <ProductList />
              <Graph />
              <Factbox />
              // component
         </div>
      );
   }
}
