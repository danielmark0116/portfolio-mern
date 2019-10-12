import * as types from '../actions/actionTypes';
import { ActionTypes } from '../actions/actionTypes';
import { AppState } from '../store';
import { userData } from '../types/userData';
import { requestData } from '../types/requestData';

// SELECTORS
export const selectorLoggedIn = (state: AppState): Boolean =>
  state.auth.loggedIn;

export const selectorIsAdmin = (state: AppState): Boolean => state.auth.isAdmin;

// AUTH REDUCER ---------
interface IState {
  loggedIn: Boolean;
  userData: userData;
  requestData: requestData;
  isAdmin: Boolean;
}

const initState: IState = {
  loggedIn: false,
  userData: {
    googleId: '',
    email: '',
    name: '',
    photo: ''
  },
  requestData: {
    error: false,
    success: false,
    pending: false,
    msg: ''
  },
  isAdmin: false
};

export function authReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.AUTH_CHECK:
      return { ...state };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        userData: action.payload.userData,
        isAdmin: action.payload.isAdmin
      };
    case types.AUTH_LOGIN_FAIL:
      return { ...state, loggedIn: false, isAdmin: false };
    case types.AUTH_REQUEST_START:
      return {
        ...state,
        requestData: action.payload
      };
    case types.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        requestData: action.payload
      };
    case types.AUTH_REQUEST_FAIL:
      return {
        ...state,
        requestData: action.payload
      };
    default:
      return state;
  }
}
