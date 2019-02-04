import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Login from '../';

describe('Login tests', () => {
  const mockStore = configureStore();
  let loginComponent,
      store;

  beforeEach(() => {
    store = mockStore({});
    loginComponent = mount(
      <Provider store={store}>
        <Login/>
      </Provider>
    );
  });

  it('renders an empty username field', () => {
    expect.assertions(5);

    const usernameField = loginComponent.find('#username');

    expect(usernameField).toHaveLength(1);
    expect(usernameField.prop('name')).toBe('username');
    expect(usernameField.prop('type')).toBe('email');
    expect(usernameField.instance().value).toBe('');
    expect(document.activeElement.id).toBe('username');
  });

  it('renders an empty password field', () => {
    expect.assertions(4);

    const passwordField = loginComponent.find('#password');

    expect(passwordField).toHaveLength(1);
    expect(passwordField.prop('name')).toBe('password');
    expect(passwordField.prop('type')).toBe('password');
    expect(passwordField.instance().value).toBe('');
  });

  it('renders a primary login button', () => {
    expect.assertions(3);

    const loginButton = loginComponent.find('button');

    expect(loginButton).toHaveLength(1);
    expect(loginButton.text()).toBe('Login');
    expect(loginButton.hasClass('btn-primary')).toBe(true);
  });

  it('doesn\'t render any login error messages', () => {
    expect.assertions(1);

    expect(loginComponent.find('#login-error')).toHaveLength(0);
  });

  it('renders a logo image', () => {
    expect.assertions(2);

    const logoImage = loginComponent.find('img');

    expect(logoImage.prop('src')).toContain('arris-logo-login');
    expect(logoImage.prop('alt')).toBe('ARRIS');
  });

  it('renders the correct title', () => {
    expect.assertions(2);

    const headerText = loginComponent.find('#login-header-text');

    expect(headerText).toHaveLength(1);
    expect(headerText.text()).toBe('Network Intelligence');
  });

  it('displays a message after login and clears the password field', () => {
    expect.assertions(4);

    loginComponent.find('form').simulate('submit');
    expect(loginComponent.find('#login-error')).toHaveLength(1);
    expect(loginComponent.find('#username').instance().value).toBe('');
    expect(loginComponent.find('#password').instance().value).toBe('');
    expect(document.activeElement.id).toBe('username');
  });
});
