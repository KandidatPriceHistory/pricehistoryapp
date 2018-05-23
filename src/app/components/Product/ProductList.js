import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

export default class productList extends React.Component {
  render() {
    return (
      <div className = "listProducts" >
        { this.props.products.map(el => (
          <ProductItem product={el} key={el.id}/>
        ))}
      </div>
    )
  }
}
