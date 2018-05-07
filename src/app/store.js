import logger from 'redux-logger';
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";

import { createStore, applyMiddleware } from 'redux';

// initialize store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;
