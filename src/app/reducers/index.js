import axios from "axios";

const initialState = {
  productsFetched: false,
  productFetched: false,
  retailersFetched: false,
  retailerFetched: false,
  priceHistoryFetched: false,
  products: [],
  retailers: [],
  retailer: [],
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
      case "FETCH_RETAILER_START": {
        return {...state,
          fetching: true}
        break;
      }
      case "RECIEVE_RETAILER": {
        return {
        ...state,
          fetching: false,
          retailerFetched: true,
          retailer: action.payload,
        }
        break;
      }
      case "FETCH_RETAILER_ERROR": {
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
          product: action.payload
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
          priceHistoryFetched: false
        }
        break;
      }
      case "RECIEVE_PRICE_HISTORY": {
        return {
          ...state,
          fetching: false,
          priceHistoryFetched: true,
          priceHistoryItem: action.payload
        }
        break;
      }
      case "FETCH_PRICE_HISTORY_ERROR": {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
        break;
      }
    default:
      return state;
  }
};

export { rootReducer };
