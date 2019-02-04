import { combineReducers } from 'redux';

import login from '../modules/login/reducers';
import sidebar from '../modules/sidebar/reducers';

import { ActionTypes } from '../modules/login/constants';

const appReducers = combineReducers({
  login,
  sidebar
});

const Reducer = (state, action) => {
  // Handle a user logout and completely reset state
  if (action.type === ActionTypes.LOG_OUT_SUCCESS) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default Reducer;
