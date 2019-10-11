import axios from 'axios';
import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { updateToken } from '../utils/fetchToken';
import { requestStart, requestSuccess, requestFail } from './requestActions';
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

// THUNKS
export const projectsGetAllThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(requestStart());
    updateToken();

    try {
      let response = await axios.get('/project');

      dispatch(projectsGetAll(response.data));
      dispatch(requestSuccess('Fetched all projects'));
    } catch (err) {
      dispatch(requestFail(err.message, types.PROJECTS_GET_ALL));
    }
  };
};

export const projectsGetOnlyPublishedThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(requestStart(types.PROJECTS_GET_ONLY_PUBLISHED));

    try {
      let response = await axios.get('/project/published');

      dispatch(projectsGetOnlyPublished(response.data.response));
      dispatch(requestSuccess(types.PROJECTS_GET_ONLY_PUBLISHED));
    } catch (err) {
      dispatch(requestFail(err.message, types.PROJECTS_GET_ONLY_PUBLISHED));
    }
  };
};
