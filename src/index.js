import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}     from 'react-redux';
import {createStore, applyMiddleware}             from 'redux';
import {Router, Route, IndexRoute, browserHistory}   from 'react-router';
import reduxThunk       from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));