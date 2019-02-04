import axios from 'axios';
import { initialiseUserSuccess, logoutSuccess } from '../modules/login/actions';
import { initialiseUser, isLoggedIn, clearUser } from '../modules/login/helpers';

export const configureMiddleware = (dispatch) => {
  // Set base url from .env
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

  // Initialise user details if logged in
  const user = isLoggedIn();
  if (user) {
    initialiseUser(user.username, user.jwt);
    dispatch(initialiseUserSuccess({ username: user.username }));
  }

  // intercept 401 responses and log user out
  axios.interceptors.response.use(
    resp => resp,
    err => {
      if (!err.response || err.response.status === 500) {
        console.log(err);   // eslint-disable-line no-console
      } else if (err.response.status === 401) {
        if (window.location.href.includes('/login')) {
          // this is likely a failed login, just return
          return err;
        }

        clearUser();
        dispatch(logoutSuccess());    // would rather call an action here instead of the success function

        window.location.href = '/login';
      }

      return err;
    }
  );
};
