import React, { Component } from 'react';

import Header from "./Header/Header";
import Footer from "./Footer";

export default class AppComponent extends React.Component {

   render() {
       const title = "Välkommen Farangis";
      return (
         <div>
          <Header title ={title}/>
          <Header title = {"The other title"} />
          <Footer />
         </div>
      );
   }
}
