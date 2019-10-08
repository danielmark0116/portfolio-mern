import { userData } from '../types/userData';

// REQUEST
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

// AUTH
export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

interface requestStartActionType {
  type: typeof REQUEST_START;
}

interface requestSuccessActionType {
  type: typeof REQUEST_SUCCESS;
  payload: string;
}

interface requestFailActionType {
  type: typeof REQUEST_FAIL;
  payload: string;
}

interface authCheckActionType {
  type: typeof AUTH_CHECK;
}

interface authLoginActionType {
  type: typeof AUTH_LOGIN;
}

interface authLoginSuccessActionType {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: {
    userData: userData;
    isAdmin: Boolean;
  };
}

interface authLoginFailActionType {
  type: typeof AUTH_LOGIN_FAIL;
}

export type ActionTypes =
  | authCheckActionType
  | authLoginActionType
  | authLoginSuccessActionType
  | authLoginFailActionType
  | requestStartActionType
  | requestSuccessActionType
  | requestFailActionType;
