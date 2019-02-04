import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../../components/layout';

const ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
