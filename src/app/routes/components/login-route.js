import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../../modules/login';

const LoginRoute = ({ isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Login {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/overview',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default LoginRoute;