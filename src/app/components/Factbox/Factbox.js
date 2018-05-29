import React, { Component } from 'react';
import styles from "./Factbox.scss";
import loggaSaknas40120 from './loggaSaknas40120.png';

export default class Factbox extends Component {
    getLogo() {
      let logo = this.props.retailer.retailerLogo;
      if (logo === "") {
        logo = loggaSaknas40120;
      } else {
        logo = "https://images.pricerunner.com/images/120x40/logos/"+logo;
      }
      return logo;
    }
   render() {
      return (
        <div className = "factboxDiv">
          <img
            src={this.getLogo()} id="retailerImg"
          />
          <h2 className= "factsHeadline"> Facts about {this.props.product.name} </h2>
          <h3 className = "facts"> Produkten var billigast den <b>{this.props.maxPrice.updatedAt}</b> och kostade då <b>{this.props.minPrice.price} SEK</b></h3>
          <h3 className = "facts"> Produkten var dyrast den <b>{this.props.minPrice.updatedAt}</b> och kostade då <b>{this.props.maxPrice.price} SEK</b></h3>
        </div>
      );
   }
}
