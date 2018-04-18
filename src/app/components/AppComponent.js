import React, { Component } from 'react';
import Header from "./Header/Header";
import Graph from "./Graph/Graph"
import Product from "./Product/Product"
import Factbox from "./Factbox/Factbox"

export default class AppComponent extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Product />
            <Graph />
            <Factbox />
         </div>
      );
   }
}