import axios from 'axios';

export function fetchPriceHistory() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRICE_HISTORY_START"})
    axios.get("http://localhost:3000/products")
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
    axios.get("http://localhost:3000/products")
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

export function fetchProduct() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCT_START"})
    axios.get("http://localhost:3000/products")
      .then((response) => {
        dispatch({
          type: "RECIEVE_PRODUCT",
          payload: response.data[0]
        })
        console.log('in product',response.data)
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PRODUCT_ERROR",
          payload: err})
      })
  }
}
