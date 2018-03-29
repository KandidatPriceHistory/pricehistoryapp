import React, { Component } from 'react';
import Header from "./Header/Header";
import Graph from "./Graph/Graph"
import Product from "./Product/Product"

export default class AppComponent extends React.Component {

   render() {
     const title = "PriceHistory";
      return (
         <div>
          <Header title ={title}/>
          <Product />
          <Graph />
         </div>
      );
   }
}
