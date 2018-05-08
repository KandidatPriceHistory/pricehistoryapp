import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import reducers from "../reducers/index.js"

import ProductInfoBox from './Product/ProductInfoBox';
import { fetchProduct } from '../actions/index';

import Factbox from "./Factbox/Factbox";

class productPriceHistory extends Component {

  componentWillMount() {
    this.props.dispatch(fetchProduct());
  }
  render() {
    if (this.props.fetched){
      return (
       <div>
            <Header />
            <ProductInfoBox product={this.props.product}/>
            <Graph />
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
    graph: state.graph,
    product: state.product,
    fetching: state.fetching,
    fetched: state.fetched,
   }
}


export default connect(mapStateToProps)(productPriceHistory);
