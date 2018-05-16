import React, { Component } from 'react';
import HeaderHomePage from './Header/HeaderHomePage';
import ProductList from './Product/ProductList';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';


class Home extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProduct());
  }
   render() {
     if (this.props.productFetched){
      return (
         <div>
              <HeaderHomePage />
              <ProductList product={this.props.product} />
              <Footer />
         </div>
      )
    }else {
      return(
        <h2> Laddar ... </h2>
      )
    }
   }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    fetching: state.fetching,
    productFetched: state.productFetched,
  }
}

export default connect (mapStateToProps)(Home);
