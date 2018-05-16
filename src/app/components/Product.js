import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProductInfoBox from './Product/ProductInfoBox';
import RetailerList from './Retailers/RetailerList';
import { connect } from 'react-redux';
import { fetchProduct, fetchRetailers } from '../actions/index';

class Product extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    var currentProductId = window.location.pathname.slice(9);
    this.props.dispatch(fetchProduct(currentProductId));
    this.props.dispatch(fetchRetailers(currentProductId));
  }

  render() {
     if (this.props.productFetched && this.props.retailersFetched){
       return (
        <div>
             <Header />
             <ProductInfoBox product={this.props.product}/>
             <RetailerList retailers={this.props.retailers} product={this.props.product}/>
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
    product: state.product,
    productFetched: state.productFetched,
    retailersFetched: state.retailersFetched,
    retailers: state.retailers,
    }
}

export default connect(mapStateToProps)(Product);
