import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import reducers from "../reducers/index.js"

import ProductInfoBox from './Product/ProductInfoBox';
import { fetchPriceHistory, fetchProduct } from '../actions/index';

import Factbox from "./Factbox/Factbox";

class productPriceHistory extends Component {

  componentWillMount() {
    var currentProductId = window.location.pathname.slice(21,27);
    var currentRetailerId = window.location.pathname.slice(28);
    this.props.dispatch(fetchProduct(currentProductId));
    //this.props.dispatch(fetchPriceHistory(currentProductId, currentRetailerId));
  }
  render() {
    if (this.props.productsFetched && this.props.priceHistoryFetched){
      return (
       <div>
            <Header />
            <ProductInfoBox product={this.props.product}/>
            //<Graph graph={this.props.priceHistoryItem}/>
            <Factbox />
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
    productsFetched: state.productsFetched,
    priceHistoryFetched: state.priceHistoryFetched,
    priceHistoryItem: state.priceHistoryItem,
   }
}


export default connect(mapStateToProps)(productPriceHistory);
