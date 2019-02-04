import axios from 'axios';

export const isLoggedIn = () => {
  const userFromStorage = localStorage.getItem('user');
  return userFromStorage ? JSON.parse(userFromStorage) : false;
};

export const initialiseUser = (username, token) => {
  localStorage.setItem('user', JSON.stringify({
    username: username,
    jwt: token
  }));

  axios.defaults.headers.common.Authorization = token;
};

export const clearUser = () => {
  localStorage.removeItem('user');
  delete axios.defaults.headers.common.Authorization;
};
