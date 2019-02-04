import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';

import LoginRoute from './components/login-route';
import ProtectedRoute from './components/protected-route';

import App from '..';
import Overview from '../modules/overview';

const AppWithProps = withRouter(App);

const Routes = (props) => (
  <Router>
    <AppWithProps>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/overview"/>}/>
        <LoginRoute isLoggedIn={props.loggedIn} exact path="/login"/>
        <ProtectedRoute isLoggedIn={props.loggedIn} exact path="/overview" component={Overview}/>
      </Switch>
    </AppWithProps>
  </Router>
);

Routes.propTypes = {
  loggedIn: PropTypes.bool
};

export default connect(
  state => ({
    loggedIn: state.login.loggedIn
  })
)(Routes);
