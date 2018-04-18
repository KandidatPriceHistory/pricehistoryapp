import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppComponent from './components/AppComponent';


const renderApp = (Component) => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};
//translate: renderar AppComponent i html koden med id "app"

renderApp(AppComponent);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/AppComponent', () => {
        const App = require('./components/AppComponent').default;
        renderApp(App);
    });
}
