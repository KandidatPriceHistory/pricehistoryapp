import axios from "axios";

const initialState = {
  productsFetched: false,
  productFetched: false,
  retailersFetched: false,
  retailerFetched: false,
  priceHistoryFetched: false,
  maxPriceFetched: false,
  minPriceFetched: false,
  products: [],
  retailers: [],
  retailer: [],
  error: null,
  priceHistoryItem: [],
  minPrice: {},
  maxPrice: {},
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

      case "FETCH_MAXPRICE_START": {
        return {
          ...state,
          maxPriceFetched: false
        }
        break;
      }
      case "RECIEVE_MAXPRICE": {
        return {
          ...state,
          maxPriceFetched: true,
          maxPrice: action.payload
        }
        break;
      }
      case "FETCH_MAXPRICE_ERROR": {
        return {
          ...state,
          error: action.payload
        }
        break;
      }
      case "FETCH_MINPRICE_START": {
        return {
          ...state,
          minPriceFetched: false
        }
        break;
      }
      case "RECIEVE_MINPRICE": {
        return {
          ...state,
          minPriceFetched: true,
          minPrice: action.payload
        }
        break;
      }
      case "FETCH_MINPRICE_ERROR": {
        return {
          ...state,
          error: action.payload
        }
        break;
      }
    default:
      return state;
  }
};

export { rootReducer };
