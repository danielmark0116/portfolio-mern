import { userData } from '../types/userData';
import { generalsData } from '../types/generalsData';
import { projectData } from '../types/projectData';
import { requestData } from '../types/requestData';

// REQUEST
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

interface requestStartActionType {
  type: typeof REQUEST_START;
  payload: requestData;
}

interface requestSuccessActionType {
  type: typeof REQUEST_SUCCESS;
  payload: requestData;
}

interface requestFailActionType {
  type: typeof REQUEST_FAIL;
  payload: requestData;
}

// AUTH
export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

export const AUTH_REQUEST_START = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';

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

interface authRequestSuccessActionType {
  type: typeof AUTH_REQUEST_SUCCESS;
  payload: requestData;
}

interface authRequestFailActionType {
  type: typeof AUTH_REQUEST_FAIL;
  payload: requestData;
}

interface authRequestStartActionType {
  type: typeof AUTH_REQUEST_START;
  payload: requestData;
}

// GENERALS
export const GENERALS_GET_ALL = 'GENERALS_GET_ALL';
export const GENERALS_GET_ALL_SUCCESS = 'GENERALS_GET_ALL_SUCCESS';
export const GENERALS_UPDATE = 'GENERALS_UPDATE';
export const GENERALS_UPDATE_SUCCESS = 'GENERALS_UPDATE_SUCCESS';

export const GENERALS_REQUEST_START = 'GENERALS_REQUEST_START';
export const GENERALS_REQUEST_SUCCESS = 'GENERALS_REQUEST_SUCCESS';
export const GENERALS_REQUEST_FAIL = 'GENERALS_REQUEST_FAIL';

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

interface generalsRequestSuccessActionType {
  type: typeof GENERALS_REQUEST_SUCCESS;
  payload: requestData;
}

interface generalsRequestFailActionType {
  type: typeof GENERALS_REQUEST_FAIL;
  payload: requestData;
}

interface generalsRequestStartActionType {
  type: typeof GENERALS_REQUEST_START;
  payload: requestData;
}

// PROJECTS
export const PROJECTS_GET_ALL = 'PROJECTS_GET_ALL';
export const PROJECTS_GET_ONLY_PUBLISHED = 'PROJECTS_GET_ONLY_PUBLISHED';
export const PROJECTS_GET_ONE = 'PROJECTS_GET_ONE';
export const PROJECTS_PUBLISH_ONE = 'PROJECTS_PUBLISH_ONE';
export const PROJECTS_ADD_ONE = 'PROJECTS_ADD_ONE';
export const PROJECTS_EDIT_ONE = 'PROJECTS_EDIT_ONE';
export const PROJECTS_DELETE_ONE = 'PROJECTS_DELETE_ONE';

export const PROJECTS_REQUEST_START = 'PROJECTS_REQUEST_START';
export const PROJECTS_REQUEST_SUCCESS = 'PROJECTS_REQUEST_SUCCESS';
export const PROJECTS_REQUEST_FAIL = 'PROJECTS_REQUEST_FAIL';

interface projectsGetAllActionType {
  type: typeof PROJECTS_GET_ALL;
  payload: projectData[];
}

interface projectsGetOnlyPublishedActionType {
  type: typeof PROJECTS_GET_ONLY_PUBLISHED;
  payload: projectData[];
}

interface projectsGetOneActionType {
  type: typeof PROJECTS_GET_ONE;
  payload: projectData;
}

interface projectsPublishOneActionType {
  type: typeof PROJECTS_PUBLISH_ONE;
}

interface projectsAddOneActionType {
  type: typeof PROJECTS_ADD_ONE;
}

interface projectsEditOneActionType {
  type: typeof PROJECTS_EDIT_ONE;
}

interface projectsDeleteOneActionType {
  type: typeof PROJECTS_DELETE_ONE;
}

interface projectsRequestSuccessActionType {
  type: typeof PROJECTS_REQUEST_SUCCESS;
  payload: requestData;
}

interface projectsRequestFailActionType {
  type: typeof PROJECTS_REQUEST_FAIL;
  payload: requestData;
}

interface projectsRequestStartActionType {
  type: typeof PROJECTS_REQUEST_START;
  payload: requestData;
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
  | generalsUpdateSuccessActionType
  | projectsGetAllActionType
  | projectsGetOnlyPublishedActionType
  | projectsGetOneActionType
  | projectsPublishOneActionType
  | projectsAddOneActionType
  | projectsEditOneActionType
  | projectsDeleteOneActionType
  | authRequestSuccessActionType
  | authRequestFailActionType
  | authRequestStartActionType
  | generalsRequestSuccessActionType
  | generalsRequestFailActionType
  | generalsRequestStartActionType
  | projectsRequestStartActionType
  | projectsRequestSuccessActionType
  | projectsRequestFailActionType;
