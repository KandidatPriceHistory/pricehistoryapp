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

/*
const mapDispatchToProps = dispatch => ({
  toggleProduct: id => dispatch(toggleProduct(id))
})*/

const ProductList = connect(mapStateToProps)(connectedList);

export default ProductList;

/*

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
}*/
