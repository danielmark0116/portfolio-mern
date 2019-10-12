import axios from 'axios';
import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { updateToken } from '../utils/fetchToken';
import { projectData } from '../types/projectData';
import { Dispatch } from 'redux';

updateToken();

// ACTIONS
export const projectsGetAll = (payload: projectData[]): ActionTypes => ({
  type: types.PROJECTS_GET_ALL,
  payload
});

export const projectsGetOnlyPublished = (
  payload: projectData[]
): ActionTypes => ({
  type: types.PROJECTS_GET_ONLY_PUBLISHED,
  payload
});

export const projectsGetOne = (payload: projectData): ActionTypes => ({
  type: types.PROJECTS_GET_ONE,
  payload
});

export const projectsPublishOne = (): ActionTypes => ({
  type: types.PROJECTS_PUBLISH_ONE
});

export const projectsAddOne = (): ActionTypes => ({
  type: types.PROJECTS_ADD_ONE
});

export const projectsEditOne = (): ActionTypes => ({
  type: types.PROJECTS_EDIT_ONE
});

export const projectsDeleteOne = (): ActionTypes => ({
  type: types.PROJECTS_DELETE_ONE
});

export const projectsRequestStart = (msg: string = ''): ActionTypes => ({
  type: types.PROJECTS_REQUEST_START,
  payload: {
    error: false,
    pending: true,
    success: false,
    msg: msg
  }
});

export const projectsRequestSuccess = (msg: string = ''): ActionTypes => ({
  type: types.PROJECTS_REQUEST_SUCCESS,
  payload: {
    error: false,
    pending: false,
    success: true,
    msg: msg
  }
});

export const projectsRequestFail = (errMsg: string = ''): ActionTypes => ({
  type: types.PROJECTS_REQUEST_FAIL,
  payload: {
    error: true,
    pending: false,
    success: false,
    msg: errMsg
  }
});

// THUNKS
export const projectsGetAllThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(projectsRequestStart());
    updateToken();

    try {
      let response = await axios.get('/project');

      dispatch(projectsGetAll(response.data));
      dispatch(projectsRequestSuccess('Fetched all projects'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsGetOnlyPublishedThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(projectsRequestStart(types.PROJECTS_GET_ONLY_PUBLISHED));

    try {
      let response = await axios.get('/project/published');

      dispatch(projectsGetOnlyPublished(response.data.response));
      dispatch(projectsRequestSuccess(types.PROJECTS_GET_ONLY_PUBLISHED));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};
