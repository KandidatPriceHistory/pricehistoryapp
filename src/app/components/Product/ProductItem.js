import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Product.scss"
import { Link } from 'react-router-dom';

const Product = ({ name, id, picSrc }) => (
  <Link to = {`/product/${id}`} >
    <div className = "productItem" key = {id} >
      <img src={picSrc} className="pictureList" />
      {name}
    </div>
  </Link>
)

/*Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}*/

export default Product
