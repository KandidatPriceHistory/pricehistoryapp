import React, { Component } from 'react';
import styles from "./Product.scss"

export default class ProductInfoBox extends React.Component {
  render() {
    const currentProduct = this.props.product;
     return (
        <div className = "productInfoBox">
            <h1 id="titleInfoBox">{currentProduct.name}</h1>
            <img src={"https://images.pricerunner.com/product/200x200/"+currentProduct.productImages} id="productPicture"/>
            <div className="descriptionBox">
              <p className="productInfoText"> Manufacturer: {currentProduct.manufacturer.name} </p>
              <p className="productInfoText"> {currentProduct.description} </p>
            </div>
        </div>
     );
  }
}
