import React, { Component } from 'react';
import Header from './Header/Header';
import ProductInfoBox from './Product/ProductInfoBox';
import { connect } from 'react-redux';
import { loadProduct } from './../actions/index';

class Product extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(loadProduct(this.props.productId));
  }
   render() {
      if(this.props.selectedProduct === undefined || this.props.selectedProduct === null) {
        return <h2>Laddar...</h2>;
      } else {
        return (
         <div>
              <Header />
              <ProductInfoBox product={this.props.selectedProduct}/>
         </div>)
       }
   }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedProduct: state.selectedProduct, productId: ownProps.match.params.id }
}

export default connect(mapStateToProps)(Product);
