import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import reducers from "../reducers/index.js"

import ProductInfoBox from './Product/ProductInfoBox';

import Factbox from "./Factbox/Factbox";

class productPriceHistory extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductInfoBox product={this.props.selectedProduct}/> <Graph />

                <Factbox />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return { graph: state.graph, selectedProduct: state.selectedProduct }
}


export default connect(mapStateToProps)(productPriceHistory);
