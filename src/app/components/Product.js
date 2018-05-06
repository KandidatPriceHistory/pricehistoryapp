import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProductInfoBox from './Product/ProductInfoBox';
import RetailerList from './Retailers/RetailerList';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';

class Product extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchProduct());
  }

   render() {
     if (this.props.fetched){
       return (
        <div>
             <p> {this.props.product.manufacturer.name} </p>
             <Header />
             <ProductInfoBox product={this.props.selectedProduct}/>
             <RetailerList retailers={this.props.retailers}/>
             <Footer />
        </div>
        )
      }
      else {
        return(
          <h2> Laddar ... </h2>
        )
       }
     }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProduct: state.selectedProduct,
    retailers: state.retailers,
    product: state.product,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error,
    }
}

export default connect(mapStateToProps)(Product);
