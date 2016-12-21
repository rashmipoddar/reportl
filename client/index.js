import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/app';
import reducers from './reducers';

const logger = createLogger();

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      applyMiddleware(promise, logger),
    )}
  >
    <App />
  </Provider>
  , document.getElementById('container'));

