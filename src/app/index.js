import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import styled from 'styled-components';

import GlobalStyles from './global-styles';

const StyledApp = styled.div`
  min-height: 100vh;
`;

const App = (props) => {
  const { children, isLoggedIn } = props;
  const appClasses = classNames('main-body', { 'no-background': !isLoggedIn });

  return (
    <StyledApp className={appClasses}>
      <GlobalStyles/>
      {children}
    </StyledApp>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool
};

// bare component without store for testing
export const InternalAppComponent = App;

export default connect(
  state => ({ isLoggedIn: state.login.loggedIn })
)(InternalAppComponent);
