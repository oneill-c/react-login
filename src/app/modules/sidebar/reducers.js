import { handleActions } from 'redux-actions';

import { ActionTypes } from './constants';

const reducers = handleActions({
  [ActionTypes.HIERARCHY_FETCHED]: (state, action) => ({
    ...state,
    hierarchy: action.payload
  })
}, {});

export default reducers;
