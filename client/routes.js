import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LoginField from './containers/login-field';
import ClassMaker from './containers/class-maker';
import UserForm from './containers/addUser';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginField} />
    <Route path="/class" component={ClassMaker} />
    <Route path="/user" component={UserForm} />
  </Route>
);
