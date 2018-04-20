import React, { Component } from 'react';
import styles from "./Product.scss"

export default class ProductItemBox extends React.Component {
  render() {
     return (
        <div class = "productInfoBox">
          <img id ="productPicture" src="https://www.tele2.se/shop/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_front.png" />
        </div>
     );
  }
}
