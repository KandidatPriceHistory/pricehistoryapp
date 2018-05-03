import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import AppComponent from './components/AppComponent';
import productListApp from './reducers';

// imports for routing
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory();

//initialize store
const store = createStore(productListApp);

render(
  <Provider store = { store } >
    <ConnectedRouter history={history}>
      <AppComponent />
    </ConnectedRouter>
  </Provider>,
   document.getElementById('app')
 );
//translate: renderar AppComponent i html koden med id "app"

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/AppComponent', () => {
        const App = require('./components/AppComponent').default;
        renderApp(App);
    });
}
