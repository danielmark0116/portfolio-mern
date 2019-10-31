import Cookie from 'js-cookie';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { userData } from '../types/userData';

export const fetchToken = () => {
  return Cookie.get('googleAuthToken');
};

export const getAuthHeaders = () => {
  return { headers: { Authorization: `Bearer ${fetchToken()}` } };
};

export const updateToken = (): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${fetchToken()}`;
};

export const verifyToken = (token: string): Boolean => {
  const nowInEpoch = Math.round(new Date().getTime() / 1000);

  const decoded = jwt.decode(token);

  const isTokenValid = decoded ? _.get(decoded, 'exp') > nowInEpoch : false;

  return isTokenValid;
};

export const decodeToken = (token: string): userData => {
  const decoded = jwt.decode(token);

  // googleId: string;
  // photo: string;
  // name: string;
  // email: string;

  return {
    googleId: _.get(decoded, 'user.googleId'),
    photo: _.get(decoded, 'user.photo'),
    name: _.get(decoded, 'user.name'),
    email: _.get(decoded, 'user.email')
  };
};

export const decodeTokenIsAdmin = (token: string): Boolean => {
  const decoded = jwt.decode(token);

  return _.get(decoded, 'user.admin');
};
