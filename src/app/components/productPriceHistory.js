import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import ProductInfoBox from './Product/ProductInfoBox';
import Factbox from "./Factbox/Factbox";

import { fetchPriceHistory, fetchProduct, fetchRetailer } from '../actions/index';
import reducers from "../reducers/index.js"

class productPriceHistory extends Component {

  componentWillMount() {
    const currentProductId = window.location.pathname.slice(21,30);
    const currentRetailerId = window.location.pathname.slice(31);
    this.props.dispatch(fetchProduct(currentProductId));
    this.props.dispatch(fetchPriceHistory(currentProductId, currentRetailerId));
    this.props.dispatch(fetchRetailer(currentProductId,currentRetailerId));
  }
  render() {
    if (this.props.productFetched && this.props.priceHistoryFetched && this.props.retailerFetched){
      return (
       <div>
            <Header />
            <ProductInfoBox product={this.props.product}/>
            <Graph graph={this.props.priceHistoryItem}/>
            <Factbox pricehistory={this.props.priceHistoryItem} product = {this.props.product} retailer={this.props.retailer}/>
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

const mapStateToProps = state => {
  return {
    product: state.product,
    productFetched: state.productFetched,
    priceHistoryItem: state.priceHistoryItem,
    priceHistoryFetched: state.priceHistoryFetched,
    retailer: state.retailer,
    retailerFetched: state.retailerFetched,
   }
}


export default connect(mapStateToProps)(productPriceHistory);
