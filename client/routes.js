import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LoginField from './containers/login-field';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginField} />
  </Route>
);
