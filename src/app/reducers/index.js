import { LOAD_PRODUCT } from '../actions/action-types';
import { LOAD_GRAPH } from '../actions/action-types';
import { LOAD_RETAILERS } from '../actions/action-types';
import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  product: null,
  retailers: null,
  error: null,

/*  graph:[
  {"month": 'Nov', "price": 4000},
  {"month": 'Dec', "price": 4000},
  {"month": 'Jan', "price": 5030},
  {"month": 'Feb', "price": 2780},
  {"month": 'Mar', "price": 1890},
  {"month": 'Apr', "price": 50},
  {"month": 'Maj', "price": 3490}
],*/
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
     case LOAD_PRODUCT:
      return {
        selectedProduct: state.selectedProduct,
    }
       case LOAD_RETAILERS:
      return {
        retailers: state.retailers,
      }

      /*{
        products: state.products,
        selectedProduct: state.products.filter(el =>
        el.id == action.id
        //returnerar endast det product-objektet som är samma id som actionet (retunerar en lista)
      )[0]};*/
      case LOAD_GRAPH:
        return {
          graph: state.graph
        }

      case "FETCH_PRODUCT_START": {
        return {...state, fetching: true}
        break;
      }
      case "RECIEVE_PRODUCT": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          product: action.payload,
        }
        break;
      }
      case "FETCH_PRODUCT_ERROR": {
        return {...state, fetching: false, error: action.payload}
        break;
      }
    default:
      return state;
  }
};

export { rootReducer };
