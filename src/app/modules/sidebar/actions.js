import axios from 'axios';
import { createAction } from 'redux-actions';

import { ActionTypes } from './constants';

const hierarchyFetched = createAction(ActionTypes.HIERARCHY_FETCHED);

export function getHierarchy() {
  const url = '/api/network/getServiceProviderHierarchy';

  return dispatch => {
    return axios
      .post(url, {})
      .then(
        resp => {
          dispatch(hierarchyFetched(resp.data));
        }
      );
  };
}
