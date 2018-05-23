import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import reducers from "../reducers/index.js"
import ProductInfoBox from './Product/ProductInfoBox';
import { fetchPriceHistory, fetchProduct, fetchRetailers } from '../actions/index';

import Factbox from "./Factbox/Factbox";

class productPriceHistory extends Component {

  componentWillMount() {
    var currentProductId = window.location.pathname.slice(21,30);
    var currentRetailerId = window.location.pathname.slice(31);
    this.props.dispatch(fetchProduct(currentProductId));
    this.props.dispatch(fetchPriceHistory(currentProductId, currentRetailerId));
    this.props.dispatch(fetchRetailers(currentProductId));
    console.log("HAR FETCHAT RETAILERS");
  }
  render() {
    if (this.props.productFetched && this.props.priceHistoryFetched){
      console.log("I IF");
      return (
       <div>
            <Header />
            <ProductInfoBox product={this.props.product}/>
            <Graph graph={this.props.priceHistoryItem}/>
            <Factbox pricehistory={this.props.priceHistoryItem} product = {this.props.product} retailers={this.props.retailers}/>
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
  console.log("REtailers:", state.retailers);
  return {
    product: state.product,
    productFetched: state.productFetched,
    priceHistoryFetched: state.priceHistoryFetched,
    priceHistoryItem: state.priceHistoryItem,
    retailers: state.retailers,
   }
}


export default connect(mapStateToProps)(productPriceHistory);
