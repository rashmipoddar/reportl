import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducers from './reducers';
// import routes from './routes';

import App from './components/app';
import LoginField from './containers/login-field';
import ClassMaker from './containers/class-maker';
import UserForm from './containers/addUser';

const logger = createLogger();

ReactDOM.render(

  <Provider store={createStore(reducers, applyMiddleware(promise, logger))}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginField} />
        <Route path="/class" component={ClassMaker} />
        <Route path="/user" component={UserForm} />
        <Route path="/classes" component={UserForm} />
      </Route>
    </Router>
  </Provider>

  , document.getElementById('container'));
