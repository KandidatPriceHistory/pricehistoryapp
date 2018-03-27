import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";

export default class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {name: "Farangutang"}
    }
 
   render() {
       setTimeout(() => {
           this.setState({name: "Faraaangis"});
       }, 4000)
      return (
         <div>
          <Header/>
          <Footer />
           {this.state.name}
         </div>
      );
   }
}