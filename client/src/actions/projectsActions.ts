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

export const projectsPublishOne = (payload: projectData): ActionTypes => ({
  type: types.PROJECTS_PUBLISH_ONE,
  payload
});

export const projectsAddOne = (): ActionTypes => ({
  type: types.PROJECTS_ADD_ONE
});

export const projectsEditOne = (): ActionTypes => ({
  type: types.PROJECTS_EDIT_ONE
});

export const projectsDeleteOne = (id: string): ActionTypes => ({
  type: types.PROJECTS_DELETE_ONE,
  payload: id
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
    dispatch(projectsRequestStart('Fetch all projects'));
    updateToken();

    try {
      let response = await axios.get('/project');

      dispatch(projectsGetAll(response.data.response));
      dispatch(projectsRequestSuccess('Fetched all projects'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsGetOnlyPublishedThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(projectsRequestStart('Fetch only published projects'));

    try {
      let response = await axios.get('/project/published');

      dispatch(projectsGetOnlyPublished(response.data.response));
      dispatch(projectsRequestSuccess('Fetched only published projects'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsGetOneByIdThunk = (id: string) => {
  // mock id 5da0f736caa7cc0a2114d75f
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(projectsRequestStart('Fetch one project by ID'));

    try {
      let response = await axios.get(`/project/${id}`);

      dispatch(projectsGetOne(response.data.response));
      dispatch(projectsRequestSuccess('Fetched one project by ID'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsPublishOneThunk = (id: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    updateToken();
    dispatch(projectsRequestStart('Publish one project'));

    try {
      let response = await axios.patch(`/project/publish/${id}`);

      dispatch(projectsPublishOne(response.data.response));
      dispatch(projectsRequestSuccess('Published one project'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsAddOneThunk = (data: FormData) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    updateToken();

    try {
      dispatch(projectsRequestStart('Add new project'));

      await axios.post('/project', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      dispatch(projectsAddOne());
      dispatch(projectsRequestSuccess('Added new project'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsEditOneThunk = (
  id: string,
  data: FormData,
  withPic: Boolean
) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    updateToken();

    try {
      dispatch(projectsRequestStart('Edit one project'));

      if (withPic) {
        await axios.put(`/project/${id}/withPic`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.put(`/project/${id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      dispatch(projectsEditOne());
      dispatch(projectsRequestSuccess('Edited project'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};

export const projectsDeleteByIdThunk = (id: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(projectsRequestStart('Delete by id'));
    updateToken();

    try {
      await axios.delete(`/project/${id}`);

      dispatch(projectsDeleteOne(id));
      dispatch(projectsRequestSuccess('Deleted by id'));
    } catch (err) {
      dispatch(projectsRequestFail(err.message));
    }
  };
};
