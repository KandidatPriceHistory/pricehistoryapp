import React, { Component } from 'react';
import Header from './Header/Header';
import ProductList from './Product/ProductList'
// import Footer from './Footer/Footer';

export default class Home extends Component {
   render() {
      return (
         <div>
              <Header />
              // <WelcomeText />
              <ProductList />
              // <Footer />
         </div>
      );
   }
}
