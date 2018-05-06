import { LOAD_PRODUCT } from './action-types';
import { LOAD_GRAPH } from './action-types';
import { LOAD_RETAILERS } from './action-types';
import axios from 'axios';
/*
import REQ_DATA as types from '.action-types';
import RECV_DATA as types from '.action-types';
import RECV_ERROR as types from '.action-types';
*/

export const loadProduct = id => ({
  type: LOAD_PRODUCT,
  id
});

export const loadGraph = id => ({
  type: LOAD_GRAPH,
  id
});

export const loadRetailers = id => ({
  type: LOAD_RETAILERS,
  id
})

export function fetchProduct() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCT_START"})
    axios.get("https://www.pricerunner.se/public/v1/pl/1-4257585/se?urlName=Mobiltelefoner/Apple-iPhone-X-64GB-priser&offer_sort=pricewithship")
      .then((response) => {
        dispatch({
          type: "RECIEVE_PRODUCT",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCT_ERROR", payload: err})
      })
  }
}
/*

export const fetchData = url => {
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      dispatch(receiveData(response.data));
    })
    .catch(function(response){
      dispatch(recieveError(response.data));
      dispatch(pushState(null,'/error'));
    })
  }
};*/
