import axios from 'axios';
import { createAction } from 'redux-actions';

import { ActionTypes } from './constants';
import { initialiseUser, clearUser } from './helpers';

export const initialiseUserSuccess = createAction(ActionTypes.INITIALISE_USER_SUCCESS);
export const logoutSuccess = createAction(ActionTypes.LOG_OUT_SUCCESS);
const loginSuccess = createAction(ActionTypes.LOG_IN_SUCCESS);
const loginError = createAction(ActionTypes.LOG_IN_ERROR);

export function login(credentials) {
  const url = '/auth/account/authenticate';

  return dispatch => {
    return axios
      .post(url, credentials)
      .then(
        resp => {
          initialiseUser(credentials.username, resp.data.Authorization);
          dispatch(loginSuccess({ username: credentials.username }));
        },
        err => {
          clearUser();
          dispatch(loginError(err));
        }
      );
  };
}

export function logout() {
  return dispatch => {
    return new Promise(resolve => {
      clearUser();
      dispatch(logoutSuccess());
      resolve();
    });
  };
}
