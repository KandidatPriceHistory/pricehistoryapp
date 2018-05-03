import React, { Component } from 'react';
import styles from "./Product.scss"
import { loadProduct } from '../../actions/index'

export default class ProductInfoBox extends React.Component {
  render() {
     return (
        <div className = "productInfoBox">
            <h1 id="titleInfoBox">{this.props.product.name}</h1>
            <img src={this.props.product.picSrc} id="productPicture"/>
            <div className="descriptionBox">
              <p className="productInfoText"> {this.props.product.shortDescription} </p>
              <p className="productInfoText"> This will show the lowest price </p>
            </div>
        </div>
     );
  }
}
