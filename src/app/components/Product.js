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
    var currentLocation = window.location.pathname.slice(9);
    this.props.dispatch(fetchProduct(currentLocation));
    this.props.dispatch(fetchRetailers());
  }

  render() {
     if (this.props.productsFetched && this.props.retailersFetched){
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
    productsFetched: state.productsFetched,
    retailersFetched: state.retailersFetched,
    retailers: state.retailers,
    }
}

export default connect(mapStateToProps)(Product);
