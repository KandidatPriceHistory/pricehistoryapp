import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProductInfoBox from './Product/ProductInfoBox';
import RetailerList from './Retailers/RetailerList';
import { connect } from 'react-redux';

class Product extends Component {
  constructor(props){
    super(props);
  }

   render() {
        return (
         <div>
              <Header />
              <ProductInfoBox product={this.props.selectedProduct}/>
              <RetailerList retailers={this.props.retailers}/>
              <Footer />
         </div>)
       }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedProduct: state.selectedProduct, retailers: state.retailers }
}

export default connect(mapStateToProps)(Product);
