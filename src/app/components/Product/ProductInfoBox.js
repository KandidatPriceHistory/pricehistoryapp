import React, { Component } from 'react';
import styles from "./Product.scss"
import { loadProduct } from '../../actions/index'

export default class ProductInfoBox extends React.Component {
  render() {
     return (
        <div class = "productInfoBox">
            <h2 id="titleInfoBox">{this.props.product.name}</h2>
            <img src={this.props.product.picSrc} id="productPicture"/>
        </div>
          //TODO: get picture and text from Redux

     );
  }
}
/*

const mapDispatchToProps = dispatch => ({
  toggleProduct: id => dispatch(toggleProduct(id))
})

const ProductList = connect(mapStateToProps)(connectedList);

export default class ProductList extends React.Component {
  render() {
     return (
        <div className = "productDiv">
          const productList = ({ product, toggleProduct }) => (
            <div>
            {products.map(product =>
              <Product
                key={product.id}
                {...product}
                onClick={() => toggleProduct(product.id)} //(gå in på produkten)
              />
            )}
          </div>
        )
        </div>
     );
  }
*/
