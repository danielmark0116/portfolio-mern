import { userData } from '../types/userData';
import { generalsData, generalsDataElements } from '../types/generalsData';

// REQUEST
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

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

// AUTH
export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

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

// GENERALS
export const GENERALS_GET_ALL = 'GENERALS_GET_ALL';
export const GENERALS_GET_ALL_SUCCESS = 'GENERALS_GET_ALL_SUCCESS';
export const GENERALS_UPDATE = 'GENERALS_UPDATE';
export const GENERALS_UPDATE_SUCCESS = 'GENERALS_UPDATE_SUCCESS';

interface generalsGetAllActionType {
  type: typeof GENERALS_GET_ALL;
}

interface generalsGetAllSuccessActionType {
  type: typeof GENERALS_GET_ALL_SUCCESS;
  payload: generalsData;
}

interface generalsUpdateActionType {
  type: typeof GENERALS_UPDATE;
}

interface generalsUpdateSuccessActionType {
  type: typeof GENERALS_UPDATE_SUCCESS;
  payload: generalsData;
}

export type ActionTypes =
  | authCheckActionType
  | authLoginActionType
  | authLoginSuccessActionType
  | authLoginFailActionType
  | requestStartActionType
  | requestSuccessActionType
  | requestFailActionType
  | generalsGetAllActionType
  | generalsGetAllSuccessActionType
  | generalsUpdateActionType
  | generalsUpdateSuccessActionType;
