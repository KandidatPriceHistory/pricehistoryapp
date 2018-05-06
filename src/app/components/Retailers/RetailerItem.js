import React from 'react'
import PropTypes from 'prop-types'
import styles from "./retailers.scss"
import { Link } from 'react-router-dom';
import loggaSaknas from './loggaSaknas.jpg';

export default class Retailer extends React.Component {

  getLogo() {
    let logo = this.props.retailer.retailerLogo;
    if (logo === "") {
      logo = loggaSaknas;
    } else {
      logo = "https://images.pricerunner.com/images/120x40/logos/"+logo;
    }
    return logo;
  }

  render() {
    return (
      <div className = "retailerItem" key = {this.props.retailer.id} >
        <img
        src={ this.getLogo() }
        className="pictureList"
        />
        <h3 className = "retailerName">{this.props.retailer.retailerName}</h3>
      {/*<div id="arrowButton">
        <i className= {`icon-arrow-right`} />
      </div>*/}
        <Link to = "/productpricehistory" >
          <button type="button" className="graphButton"> Go to graph </button>
        </Link>
      </div>
      )
    }
  }
