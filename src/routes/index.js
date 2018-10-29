import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

import {
  HOME,
  SIGNUP,
  LOGIN,
} from './constants';

const Routes = () => (
  <Switch>
    <Route
      exact
      path={HOME}
      component={Home}
    />
    <Route
      path={LOGIN}
      component={Login}
    />
    <Route
      exact
      path={SIGNUP}
      component={Signup}
    />
    <Route
      component={Home}
    />
  </Switch>
);

export default Routes;