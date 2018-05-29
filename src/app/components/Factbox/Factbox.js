import React, { Component } from 'react';
import styles from "./Factbox.scss";

export default class Factbox extends Component {
   render() {
      return (
        <div className = "factboxDiv">
          <h2 className= "factsHeadline"> Facts about {this.props.product.name} </h2>
          <h3 className = "factsRetailer"> Retailer: {this.props.retailer.retailerName} </h3>
          <h3 className = "facts"> Produkten var billigast den <b>{this.props.maxPrice.updatedAt}</b> och kostade då <b>{this.props.minPrice.price} SEK</b></h3>
          <h3 className = "facts"> Produkten var dyrast den <b>{this.props.minPrice.updatedAt}</b> och kostade då <b>{this.props.maxPrice.price} SEK</b></h3>
        </div>
      );
   }
}
