import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Product.scss"
import { Link } from 'react-router-dom';


const Product = ({ product }) => (
    <div className = "productItem" key = {product.id} >
    <img src={"https://images.pricerunner.com/product/200x200/"+product.productImages} id="pictureList" />
      <div className= "productnameDiv">
        <h3 id="productName"> {product.name} </h3>
      </div>
      <div id="descriptionHome">
        <p> Current price from {product.minPrice.value} to {product.maxPrice.value} {product.minPrice.currency}</p>
      </div>

      <Link to = {`/product/${product.id}`} >
        <button type="button" className="goToRetailersButton"> Go to retailers </button>
      </Link>
    </div>
)

export default Product
