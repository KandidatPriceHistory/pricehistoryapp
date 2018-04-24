import React, { Component } from 'react';
import styles from "./Product.scss"
import ProductInfoBoxText from "./ProductInfoBoxText";

export default class ProductItemBox extends React.Component {
  render() {
     return (
        <div class = "productInfoBox">
          <img id ="productPicture" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-select-2017?wid=189&hei=376&fmt=png-alpha&.v=1504378258086" />
      
        </div>
     );
  }
}
