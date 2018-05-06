import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import AppComponent from './components/AppComponent';

// imports for routing
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import store from './store';

const history = createHistory();

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
