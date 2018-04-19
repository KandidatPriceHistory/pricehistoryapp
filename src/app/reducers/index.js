import { ADD_PRODUCT } from '../actions/action-types'
import axios from "axios";
import { combineReducers } from 'redux';


const initialState = {
  products: [{ "name": "iPhone", "id": 1 },
  { "name": "Macbook", "id": 2 },
  { "name": "Table", "id": 3 },
  { "name": "TV", "id": 4 },
  { "name": "Computer2","id": 5}
]
};

// TODO: sätta ett action, typ LOAD_PRODUCT när vi laddar sidan,
// att den lägger till alla produkter som hämtas från vår backend
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {state, products: [...state.products,
        action.payload]
      };
    default:
      return state;
  }
};
/*
function exampleReducer(state = {
  isLoading: false,
  data: [],
  error: false},
  action = null) {
  switch(action.type) {
		case types.RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case types.RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case types.REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};

const rootReducer = combineReducers ({
    router: routerStateReducer,
    example: exampleReducer
})*/
export default rootReducer;
