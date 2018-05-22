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
    const currentProductId = window.location.pathname.slice(21,30);
    const currentRetailerId = window.location.pathname.slice(31);
    console.log('retailerid:',currentRetailerId,'prodid:',currentProductId);
    this.props.dispatch(fetchProduct(currentProductId));
    this.props.dispatch(fetchPriceHistory(currentProductId, currentRetailerId));
  }
  render() {
    if (this.props.productFetched && this.props.priceHistoryFetched){
      return (
       <div>
            <Header />
            <ProductInfoBox product={this.props.product}/>
            <Graph graph={this.props.priceHistoryItem}/>
            <Factbox priceInfo = {this.props.priceHistoryItem}/>
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
  console.log('states:',state.priceHistoryFetched,state.productFetched);
  return {
    product: state.product,
    productFetched: state.productFetched,
    priceHistoryFetched: state.priceHistoryFetched,
    priceHistoryItem: state.priceHistoryItem,
   }
}


export default connect(mapStateToProps)(productPriceHistory);
