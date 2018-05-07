import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

export default class productList extends React.Component {
  render() {
    return (
      <div className = "listProducts" >
        <ProductItem product={this.props.product} />
        {/*
        LATER:
        { this.props.products.map(el => (
          <ProductItem product={el}/>
        ))}*/}
      </div>
    )
  }
}
