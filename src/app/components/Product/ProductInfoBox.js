import React, { Component } from 'react';
import styles from "./Product.scss"
import { loadProduct } from '../../actions/index'

export default class ProductInfoBox extends React.Component {
  render() {
     return (
        <div class = "productInfoBox">
            <div id="titleAndInfo">
              <h1 id="titleInfoBox">{this.props.product.name}</h1>
              <p id="productInfoText"> {this.props.product.shortDescription} </p>
            </div>
            <div id="productPictureDiv">
              <img src={this.props.product.picSrc} id="productPictureImg"/>
            </div>
        </div>

     );
  }
}
