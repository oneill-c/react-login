import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import { configureMiddleware } from './app/middleware';

import Routes from './app/routes';
import reducers from './app/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

configureMiddleware(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);