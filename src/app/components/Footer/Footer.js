import React, { Component } from 'react';
import styles from "./Footer.scss"

export default class Footer extends React.Component {
   render() {
      return (
        <div className = "footerDiv">
          <div>
          <p id = "autorsFooter"> Authors: Alva, Farangis och Sofia </p>
          </div>
          <h4 id="temporaryFooterComponent"> This is the footer component!</h4>
        </div>

      );
   }
}
