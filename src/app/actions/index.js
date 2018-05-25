import axios from 'axios';

export function fetchPriceHistory(prodId, retId) {
  return function(dispatch) {
    dispatch({type: "FETCH_PRICE_HISTORY_START"})
    const prodIdSliced = prodId.slice(2)
    axios.get(`https://pricehistorybackend.herokuapp.com/pricehistories/${prodIdSliced}/${retId}?per_page=100000`)
      .then((response) => {
        dispatch({
          type: "RECIEVE_PRICE_HISTORY",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PRICE_HISTORY_ERROR",
          payload: err
        })
      })
  }
}

export function fetchRetailers(productId) {
  return function(dispatch) {
    dispatch({type: "FETCH_RETAILERS_START"})
    axios.get(`https://pricehistorybackend.herokuapp.com/retailers/${productId}`)
      .then((response) => {
        dispatch({
          type: "RECIEVE_RETAILERS",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_RETAILERS_ERROR",
          payload: err
        })
      })
  }
}

export function fetchRetailer(productId,retailerId) {
  return function(dispatch) {
    dispatch({type: "FETCH_RETAILER_START"})
    axios.get(`https://pricehistorybackend.herokuapp.com/retailers/${productId}/${retailerId}`)
      .then((response) => {
        dispatch({
          type: "RECIEVE_RETAILER",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_RETAILER_ERROR",
          payload: err
        })
      })
  }
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCTS_START"})
    axios.get("https://pricehistorybackend.herokuapp.com/products")
      .then((response) => {
        dispatch({
          type: "RECIEVE_PRODUCTS",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: err})
      })
  }
}

export function fetchProduct(id) {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCT_START"})
    axios.get(`https://pricehistorybackend.herokuapp.com/products/${id}`)
      .then((response) => {
        dispatch({
          type: "RECIEVE_PRODUCT",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PRODUCT_ERROR",
          payload: err})
      })
  }
}
