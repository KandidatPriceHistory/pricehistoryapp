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
      if(!this.props.selectedProduct) {
        return (<h2>Laddar...</h2>);
      } else {
        return (
         <div>
              <Header />
              <ProductInfoBox product={this.props.selectedProduct}/>
              <RetailerList retailers={this.props.retailers}/>
              <Footer />
         </div>)
       }
   }
}

const mapStateToProps = (state, ownProps) => {
  console.log('i product, selected product:', state.selectedProduct)
  console.log('i product, retailers:', state.retailers);
  return { selectedProduct: state.selectedProduct, productId: ownProps.match.params.id, retailers: state.retailers }
}

export default connect(mapStateToProps)(Product);
