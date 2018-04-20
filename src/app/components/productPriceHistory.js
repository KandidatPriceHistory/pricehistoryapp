import React, { Component } from 'react';
import ProductList from './Product/ProductList';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';

export default class Product extends Component {
   render() {
      return (
         <div>
               <Header />
              <Graph/>
         </div>
      );
   }
}
