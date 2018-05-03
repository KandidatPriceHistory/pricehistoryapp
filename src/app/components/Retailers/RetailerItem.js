import React from 'react'
import PropTypes from 'prop-types'
import styles from "./retailers.scss"
import { Link } from 'react-router-dom';

const Retailer = ({ name, id, picSrc }) => (
    <div className = "retailerItem" key = {id} >
      <img src={picSrc} className="pictureList" />
      <h3 className = "retailerName">{name}</h3>
      {/*<div id="arrowButton">
        <i className= {`icon-arrow-right`} />
      </div>*/}
      <Link to = "/productpricehistory" >
        <button type="button" className="graphButton"> Go to graph </button>
      </Link>
    </div>
)
export default Retailer
