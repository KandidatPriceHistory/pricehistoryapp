import React, { Component } from 'react';
import styles from "./Factbox.scss";

export default class Factbox extends React.Component {

   render() {
      return (
        <div className = "factboxDiv">
        <h2 className= "productName"> Short description of product one </h2>

        <div className = "factboxDiv">
        <h3 className = "productName" > Billigast: I juni </h3>
        <h3 className = "productName" > Dyrast: I januari </h3>
        </div>
        </div>
      );
   }
}
