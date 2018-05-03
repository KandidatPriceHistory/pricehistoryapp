import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore /*, applyMiddleware */} from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import AppComponent from './components/AppComponent';

// imports for routing
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import rootReducer from "./reducers/index";

import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const middleware = applyMiddleware(thunk, logger())

const history = createHistory();

// initialize store
const store = createStore(rootReducer)

render(
  <Provider store = { store } >
    <ConnectedRouter history={history}>
      <AppComponent />
    </ConnectedRouter>
  </Provider>,
   document.getElementById('app')
 );

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/AppComponent', () => {
        const App = require('./components/AppComponent').default;
        renderApp(App);
    });
}
