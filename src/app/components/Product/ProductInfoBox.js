import React, { Component } from 'react';
import styles from "./Product.scss"
// import { loadProduct } from '../../actions/index'

export default class ProductInfoBox extends React.Component {
  render() {
    const currentProduct = this.props.product;
     return (
        <div className = "productInfoBox">
            <h1 id="titleInfoBox">{currentProduct.name}</h1>
            <img src={"https://images.pricerunner.com/product/200x200/"+currentProduct.productImages[0]} id="productPicture"/>
            <div className="descriptionBox">
              <p className="productInfoText"> Manufacturer: {currentProduct.manufacturer.name} </p>
              <p className="productInfoText"> {currentProduct.description} </p>
              <p className="productInfoText"> Lowest price: {currentProduct.minPrice.value} {currentProduct.minPrice.currency} </p>
            </div>
        </div>
     );
  }
}
