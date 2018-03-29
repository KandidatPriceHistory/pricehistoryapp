import React, { Component } from 'react';
import Header from "./Header/Header";
//import Footer from "./Footer";

export default class AppComponent extends React.Component {

   render() {
     const title = "PriceHistory";
      return (
         <div>
          <Header title ={title}/>
         </div>
      );
   }
}
