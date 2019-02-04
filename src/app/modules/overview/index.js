import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActionCreators from '../login/actions';

class Overview extends Component {
  logout() {
    const { logout, history } = this.props;

    logout()
      .then(() => {
        history.push('/login');
      });
  }

  render() {
    return (
      <Fragment>
        <h1>Good day {this.props.username}</h1>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </Fragment>
    );
  }
}

Overview.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(
  state => ({ username: state.login.username }),
  dispatch => bindActionCreators(Object.assign({}, loginActionCreators), dispatch)
)(Overview);
