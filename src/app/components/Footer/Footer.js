import React, { Component } from 'react';
import "./Footer.scss"

export default class Footer extends React.Component {
   render() {
      return (
        <div className = "footerDiv">
        <hr></hr>
          <div>
          <p id = "autorsFooter"> © Made by Alva, Farangis och Sofia </p>
          <i className= {'icon-instagram'}/>
          <i className= {'icon-twitter'}/>
          <i className= {'icon-youtube'}/>
          <i className= {'icon-facebook'}/>

          </div>
        </div>

      );
   }
}
