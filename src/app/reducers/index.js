import axios from "axios";

const initialState = {
  productsFetched: false,
  productFetched: false,
  retailersFetched: false,
  priceHistoryFetched: false,
  products: [],
  retailers: [],
  error: null,
  priceHistoryItem: [],
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_RETAILERS_START": {
        return {...state, fetching: true}
        break;
      }
      case "RECIEVE_RETAILERS": {
        return {
        ...state,
          fetching: false,
          retailersFetched: true,
          retailers: action.payload,
        }
        break;
      }
      case "FETCH_RETAILERS_ERROR": {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
        break;
      }

      case "FETCH_PRODUCTS_START": {
        return {...state, fetching: true}
        break;
      }
      case "RECIEVE_PRODUCTS": {
        return {
          ...state,
          fetching: false,
          productsFetched: true,
          products: action.payload,
        }
        break;
      }
      case "FETCH_PRODUCTS_ERROR": {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
        break;
      }

      case "FETCH_PRODUCT_START": {
        return {...state, fetching: true}
        break;
      }
      case "RECIEVE_PRODUCT": {
        return {
          ...state,
          fetching: false,
          productFetched: true,
          product: action.payload,
        }
        break;
      }
      case "FETCH_PRODUCT_ERROR": {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
        break;
      }

      case "FETCH_PRICE_HISTORY_START": {
        return {
          ...state,
          fetching: true
        }
        break;
      }
      case "RECIEVE_PRICE_HISTORY": {
        return {
          ...state,
          fetching: false,
          priceHistoryFetched: true,
          priceHistoryItem: action.payload,
        }
        break;
      }
      case "FETCH_PRICE_HISTORY_ERROR": {
        return {
          ...state,
          fetching: false,
          error: action.payload}
        break;
      }
    default:
      return state;
  }
};

export { rootReducer };
