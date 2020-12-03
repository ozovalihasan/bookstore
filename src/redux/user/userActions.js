import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userTypes';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserLogin = (username, password) => dispatch => {
  dispatch(fetchUserRequest());
  const config = {
    url: 'http://127.0.0.1:4000/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password },
  };
  axios(config)
    .then(response => {
      if (response.data.token) {
        const user = response.data;
        localStorage.token = user.token;
        dispatch(fetchUserSuccess(user));
      } else {
        dispatch(fetchUserFailure(response.data.message));
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchUserFailure(errorMsg));
    });
};

export const fetchUserSignUp = (username, password) => dispatch => {
  dispatch(fetchUserRequest());
  const config = {
    url: 'http://127.0.0.1:4000/users',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password },
  };
  axios(config)
    .then(response => {
      const user = response.data;
      localStorage.token = user.token;
      dispatch(fetchUserSuccess(user));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchUserFailure(errorMsg));
    });
};
