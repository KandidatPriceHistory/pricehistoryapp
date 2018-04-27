import React from 'react'
import PropTypes from 'prop-types'
import styles from "./retailers.scss"
import { Link } from 'react-router-dom';

//TODO: skriv vår väg till graphen på formen: `/productpricehistory/${id}`
const Retailer = ({ name, id, picSrc }) => (
  <Link to = "/productpricehistory" >
    <div className = "retailerItem" key = {id} >
      <img src={picSrc} className="retailerList" />
      {name}
    </div>
  </Link>
)
/*
export default class Retailer extends React.Component {
  render() {
    return(
      <Link to = "/productpricehistory" >
        <div className = "retailerItem" key = {id} >
          <img src={picSrc} className="retailerList" />
          {name}
        </div>
      </Link>
    )
    }
  }
}
*/
export default Retailer
