import React, { Component } from 'react';
import Header from './Header/Header';
import ProductItemBox from './Product/ProductInfoBox'
// import Footer from './Footer/Footer';

export default class Product extends Component {
   render() {
      return (
         <div>
              <Header />
              <ProductItemBox />
         </div>
      );
   }
}
