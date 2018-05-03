import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Product.scss"
import { Link } from 'react-router-dom';

const Product = ({ name, id, picSrc }) => (
  <Link to = {`/product/${id}`} >
    <div className = "productItem" key = {id} >
    <img src={picSrc} id="pictureList" />
      <div className= "productnameDiv">
        <h3 id="productName"> {name} </h3>
      </div>
      <div id="descriptionHome">
        short description of {`product ${id}`}
      </div>

    </div>
  </Link>
)

export default Product
