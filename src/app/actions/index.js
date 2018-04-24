import { LOAD_PRODUCT } from './action-types'
import axios from 'axios';
/*import REQ_DATA as types from '.action-types';
import RECV_DATA as types from '.action-types';
import RECV_ERROR as types from '.action-types';
*/

export const loadProduct = id => ({
  type: LOAD_PRODUCT,
  id
});
/*
function requestData() {
	return {
    type: types.REQ_DATA
  }
};

function receiveData(json) {
	return{
		type: types.RECV_DATA,
		data: json
	}
};

function receiveError(json) {
	return {
		type: types.RECV_ERROR,
		data: json
	}
};

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
