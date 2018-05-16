import axios from 'axios';

export function fetchPriceHistory() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRICE_HISTORY_START"})
    axios.get("https://pricehistorybackend.herokuapp.com/pricehistory")
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

export function fetchRetailers() {
  return function(dispatch) {
    dispatch({type: "FETCH_RETAILERS_START"})
    axios.get("https://pricehistorybackend.herokuapp.com/retailers")
      .then((response) => {
        dispatch({
          type: "RECIEVE_RETAILERS",
          payload: response.data
        })
        console.log('retailers:',response.data)
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_RETAILERS_ERROR",
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
        console.log('in product',response.data)
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
    axios.get("https://pricehistorybackend.herokuapp.com/products")

      .then((response) => {
        var findProduct = response.data.find(function(el) {
          return el.id === id;
        })
        dispatch({
          type: "RECIEVE_PRODUCT",
          payload: findProduct
        })
        console.log('in product',findProduct)
      })

      .catch((err) => {
        dispatch({
          type: "FETCH_PRODUCT_ERROR",
          payload: err})
      })
  }
}
