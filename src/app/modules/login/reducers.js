import { handleActions } from 'redux-actions';

import { ActionTypes } from './constants';

const initialState = {
  username: '',
  loggedIn: false
};

const reducers = handleActions({
  [ActionTypes.INITIALISE_USER_SUCCESS]: (state, action) => ({
    ...state,
    username: action.payload.username,
    loggedIn: true
  }),

  [ActionTypes.LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    username: action.payload.username,
    loggedIn: true
  }),

  [ActionTypes.LOG_IN_ERROR]: () => initialState
}, initialState);

export default reducers;
