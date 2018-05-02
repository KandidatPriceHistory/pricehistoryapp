import React, { Component } from 'react';
import styles from "./Product.scss"
import { loadProduct } from '../../actions/index'


export default class ProductInfoBox extends React.Component {
  render() {
     return (
        <div class = "productInfoBox">
            <h2 id="titleInfoBox">{this.props.product.name}</h2>
            <img src={this.props.product.picSrc} id="productPicture"/>
            <div className="descriptionBox">
              <p id="productInfoText"> {this.props.product.shortDescription} </p>
            </div>
        </div>

     );
  }
}
