import React, { Component } from 'react';
import styles from "./Factbox.scss";

export default class Factbox extends React.Component {

   render() {
      return (
        <div className = "factboxDiv">
        <h2 className= "factsHeadline"> Facts about product</h2>
        <h3 className = "facts" > Billigast: I juni </h3>
        <h3 className = "facts" > Dyrast: I januari </h3>
        </div>
      );
   }
}
