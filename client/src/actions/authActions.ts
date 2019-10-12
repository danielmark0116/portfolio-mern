import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import Cookie from 'js-cookie';
import { googleResponseData } from '../types/googleResponseData';
import { userData } from '../types/userData';
import jwt from 'jsonwebtoken';

export const authLogin = (): ActionTypes => ({
  type: types.AUTH_LOGIN
});

export const authCheck = (): ActionTypes => ({
  type: types.AUTH_CHECK
});

export const authLoginSuccess = (
  userData: userData,
  isAdmin: Boolean
): ActionTypes => ({
  type: types.AUTH_LOGIN_SUCCESS,
  payload: { userData, isAdmin }
});

export const authLoginFail = (): ActionTypes => ({
  type: types.AUTH_LOGIN_FAIL
});

export const authRequestStart = (msg: string = ''): ActionTypes => ({
  type: types.AUTH_REQUEST_START,
  payload: {
    error: false,
    pending: true,
    success: false,
    msg: msg
  }
});

export const authRequestSuccess = (msg: string = ''): ActionTypes => ({
  type: types.AUTH_REQUEST_SUCCESS,
  payload: {
    error: false,
    pending: false,
    success: true,
    msg: msg
  }
});

export const authRequestFail = (msg: string = ''): ActionTypes => ({
  type: types.AUTH_REQUEST_FAIL,
  payload: {
    error: true,
    pending: false,
    success: false,
    msg: msg
  }
});

// THUNKS
export const authLoginCheckThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(authRequestStart());
    dispatch(authCheck());
    const token = Cookie.get('googleAuthToken');
    const secret = process.env.REACT_APP_JWT_SECRET || '';

    if (!token) {
      dispatch(authLoginFail());
      dispatch(authRequestFail('No valid token found'));
    } else {
      jwt.verify(token, secret, (err, decoded: any) => {
        if (err) {
          Cookie.remove('googleAuthToken');
          dispatch(authLoginFail());
          dispatch(authRequestFail('Token is no longer valid'));
        } else {
          const { email, name, googleId, photo } = decoded.user;
          dispatch(
            authLoginSuccess(
              { email, name, googleId, photo },
              decoded.user.admin
            )
          );
          dispatch(authRequestSuccess());
        }
      });
    }
  };
};

export const authLoginThunk = (googleResponseData: googleResponseData) => {
  const userData = {
    googleId: googleResponseData.googleId,
    email: googleResponseData.profileObj.email,
    name: googleResponseData.profileObj.name,
    photo: googleResponseData.profileObj.imageUrl
  };

  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(authRequestStart());
    dispatch(authLogin());
    try {
      let response = await axios.post('/auth/login/google', userData);
      let data = await response.data;

      Cookie.set('googleAuthToken', response.data.token);

      const { googleId, email, name, photo, admin } = data.user;

      authLoginCheckThunk();

      dispatch(authLoginSuccess({ email, name, googleId, photo }, admin));
      dispatch(authRequestSuccess());
    } catch (err) {
      dispatch(authRequestFail(err.message));
      dispatch(authLoginFail());
    }
  };
};
