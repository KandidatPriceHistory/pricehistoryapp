import React from 'react'
import PropTypes from 'prop-types'
import styles from "./retailers.scss"
import { Link } from 'react-router-dom';
import loggaSaknas40120 from './loggaSaknas40120.png';

export default class Retailer extends React.Component {

  getLogo() {
    let logo = this.props.retailer.retailerLogo;
    if (logo === "") {
      logo = loggaSaknas40120;
    } else {
      logo = "https://images.pricerunner.com/images/120x40/logos/"+logo;
    }
    return logo;
  }

  render() {
    return (
      <div className = "retailerItem" key = {this.props.retailer.retailerid} >
        <div className="pictureDiv">
          <img
            src={ this.getLogo() }
            className="pictureList"
          />
        </div>

        <div className="textStoreAndPrice">
          <h3 className = "retailerName">{this.props.retailer.retailerName}</h3>
          <p key={this.props.retailer.retailerid} className="currentPrice">
          </p>
        </div>
        <Link to ={`/productpricehistory/${this.props.product.id}/${this.props.retailer.retailerid}`} className="linkTo">
          <button type="button" className="graphButton"> Go to graph </button>
           <i className="mobilebutton"></i>
        </Link>
      </div>
      )
    }
  }
