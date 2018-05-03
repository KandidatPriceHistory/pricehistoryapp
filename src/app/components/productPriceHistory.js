import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { loadGraph } from './../actions/index';
import thunk from "redux-thunk";
import reducers from "../reducers/index.js";

class productPriceHistory extends Component {
    render() {
        return (
            <div>
                <Header />
                <Graph />
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = state => {
  console.log('ye boi');
  return { graph: state.graph }
}

export default connect(mapStateToProps)(productPriceHistory);
