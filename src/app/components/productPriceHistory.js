import React, { Component } from 'react';
import Header from './Header/Header.js';
import Graph from './Graph/Graph.js';
import ProductItemBox from './Product/ProductInfoBox';

export default class productPriceHistory extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductItemBox />
                <Graph />
            </div>
        );
    }
}
