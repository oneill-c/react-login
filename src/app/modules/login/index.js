import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';
import {
  LoginWrapper,
  LoginHeader,
  Logo,
  LogoImg,
  HeaderText,
  LoginBody,
  LoginError,
  LoginErrorText,
  LoginButton,
  Copyright
} from './styled';

import FormField from '../../components/forms/form-field';
import FaIcon from '../../components/icons/fa-icon';

import ImgLogo from '../../../resources/images/arris-logo-login.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.usernameField = React.createRef();
    this.passwordField = React.createRef();

    this.state = {
      username: '',
      password: '',
      hasError: false
    };
  }

  componentDidMount() {
    this.usernameField.current.focusField();
  }

  handleLoginError(err) {
    this.setState({
      password: '',
      hasError: true,
      error: err
    });

    this.usernameField.current.focusField();
    this.passwordField.current.setField('');
  }

  handleLogin(e) {
    const { login, history } = this.props;
    const { username, password } = this.state;

    // Stop the form submission from propagating and causing a browser redirect
    e.preventDefault();

    if (username === '' || password === '') {
      this.handleLoginError('No credentials provided');
    } else {
      login({
        username,
        password
      })
        .then(
          () => {
            history.push('/overview');
          },
          err => {
            this.handleLoginError(err);
          }
        );
    }
  }

  updateStateOnFieldChange(id, value) {
    this.setState({
      [id]: value
    });
  }

  render() {
    const { hasError } = this.state;

    return (
      <LoginWrapper>
        <LoginHeader>
          <Logo>
            <LogoImg src={ImgLogo} alt="ARRIS"/>
          </Logo>
          <HeaderText>Network Intelligence</HeaderText>
        </LoginHeader>
        {hasError &&
        <LoginError>
          <FaIcon
            mode="fal"
            icon="info-circle"
            styles={{ fontSize: '32px' }}
          />
          <LoginErrorText>
            Sorry, we don’t recognize that username and password.
            <br/>
            Please try again or contact your administrator.
          </LoginErrorText>
        </LoginError>
        }
        <LoginBody>
          <form onSubmit={this.handleLogin.bind(this)}>
            <FormField
              ref={this.usernameField}
              labelText="Username"
              fieldId="username"
              fieldClasses={['form-control-sm']}
              fieldType="email"
              handleValueChanged={this.updateStateOnFieldChange.bind(this)}
            />
            <FormField
              ref={this.passwordField}
              labelText="Password"
              fieldId="password"
              fieldClasses={['form-control-sm']}
              fieldType="password"
              handleValueChanged={this.updateStateOnFieldChange.bind(this)}
            />
            <LoginButton>Login</LoginButton>
          </form>
        </LoginBody>
      </LoginWrapper>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(
  null,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);
