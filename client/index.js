import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.js';

ReactDOM.render(
  // <Provider>
    <App />
  // </Provider>
  ,
  document.getElementById('app'));
