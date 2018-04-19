import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Product.scss"

const Product = ({ name, id }) => (
  <div className = "productItem" key = {id} >
    {name}
  </div>
)

/*Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}*/

export default Product
