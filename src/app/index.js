import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppComponent from './components/AppComponent';
import productListApp from './reducers';

// redux router
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// import { Router, Route, IndexRoute } from 'react-router';
// import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import { fetchData } from './actions/index'

//initialize store
const store = createStore(productListApp)
//console.log(store.getState());

/*function loadData() {
  store.dispatch(fetchData('https://localhost:8080/reducers/productDBtest'))
}
*/
render(
  <Provider store = { store } >
    <AppComponent />
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
