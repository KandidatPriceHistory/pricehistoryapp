import { LOAD_PRODUCT } from '../actions/action-types'
import axios from "axios";
import { combineReducers } from 'redux';


const initialState = {
  products: [{ "name": "iPhone", "id": 1, "picSrc": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-select-2017?wid=189&hei=376&fmt=png-alpha&.v=1504378258086"},
  { "name": "Macbook", "id": 2, "picSrc": "https://cdn.shopify.com/s/files/1/0259/1735/products/macbook_air_template_2048x.png?v=1511882855"},
  { "name": "Headphones", "id": 3, "picSrc": "https://www.beoplay.com/~/media/relation_spots/products/h4/1000x1000/h4_steelblue_1000x1000.png"},
  { "name": "TV", "id": 4, "picSrc": "http://gif.tv/tv.png" },
  { "name": "PC","id": 5, "picSrc": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05401859.png"}
],
  data:[
  {"month": 'Nov', "price": 4000},
  {"month": 'Dec', "price": 4000},
  {"month": 'Jan', "price": 5030},
  {"month": 'Feb', "price": 2780},
  {"month": 'Mar', "price": 1890},
  {"month": 'Apr', "price": 50},
  {"month": 'Maj', "price": 3490}
  ], selectedProduct: null
};

// TODO: sätta ett action, typ LOAD_PRODUCT när vi laddar sidan,
// att den lägger till alla produkter som hämtas från vår backend
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        products: state.products,
        selectedProduct: state.products.filter(el =>
        el.id == action.id
        //returnerar endast det product-objektet som är samma id som actionet (retunerar en lista)
      )[0]};
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
