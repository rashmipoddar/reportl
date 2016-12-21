import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducers from './reducers';
import routes from './routes';

const logger = createLogger();

ReactDOM.render(

  <Provider store={createStore(reducers, applyMiddleware(promise, logger))}>
    <Router history={browserHistory} routes={routes} />
  </Provider>

  , document.getElementById('container'));
