import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

// TODO: gör till class

const mapStateToProps = state => {
  return { products: state.products };
};

const connectedList = ({ products }) => (
  <div className = "listProducts" >
    { products.map(el => (
      <ProductItem
        name={el.name}
        id={el.id}
        picSrc={el.picSrc}
      />
    ))}
  </div>
);

const ProductList = connect(mapStateToProps)(connectedList);

export default ProductList;
