import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Main from './components/Main';
import { ConnectedRouter } from 'connected-react-router';
import './css/style.css';
//import './css/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
