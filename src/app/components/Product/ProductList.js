import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

export default class productList extends React.Component {
  render() {
    console.log(this.props.products);
    return (
      <div className = "listProducts" >
        { this.props.products.map(el => (
          <ProductItem product={el}/>
        ))}
      </div>
    )
  }
}
