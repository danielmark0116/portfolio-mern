import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { postsApiUrl } from '../config';
import * as types from './actionTypes';
import axios from 'axios';
import { postData, postDataElements } from '../types/postData';
import { projectData } from '../types/projectData';
import { updateToken } from '../utils/fetchToken';

// ACTIONS
export const postsGetAll = (payload: postData[]): ActionTypes => ({
  type: types.POSTS_GET_ALL,
  payload
});

export const postsGetOne = (payload: projectData): ActionTypes => ({
  type: types.POSTS_GET_ONE,
  payload
});

export const postsAddOne = (): ActionTypes => ({
  type: types.POSTS_ADD_ONE
});

export const postsEditOne = (): ActionTypes => ({
  type: types.POSTS_EDIT_ONE
});

export const postsDeleteOne = (id: string): ActionTypes => ({
  type: types.POSTS_DELETE_ONE,
  payload: id
});

export const postsRequestStart = (msg: string = ''): ActionTypes => ({
  type: types.POSTS_REQUEST_START,
  payload: {
    error: false,
    pending: true,
    success: false,
    msg
  }
});

export const postsRequestSuccess = (msg: string = ''): ActionTypes => ({
  type: types.POSTS_REQUEST_SUCCESS,
  payload: {
    error: false,
    pending: false,
    success: true,
    msg
  }
});

export const postsRequestFail = (msg: string = ''): ActionTypes => ({
  type: types.POSTS_REQUEST_FAIL,
  payload: {
    error: true,
    pending: false,
    success: false,
    msg
  }
});

export const postsResetState = (): ActionTypes => ({
  type: types.POSTS_RESET_STATE
});

// THUNKS
export const postsGetAllThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsRequestStart(types.POSTS_GET_ALL));

    try {
      let response = await axios.get(`${postsApiUrl}/posts`);

      dispatch(postsGetAll(response.data));
      dispatch(postsRequestSuccess(types.POSTS_GET_ALL));
    } catch (err) {
      dispatch(postsRequestFail(err.message));
    }
  };
};

export const postsGetOneByIdThunk = (id: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsRequestStart(types.POSTS_GET_ONE));

    try {
      let response = await axios.get(`${postsApiUrl}/post/${id}`);

      dispatch(postsGetOne(response.data));
      dispatch(postsRequestSuccess(types.POSTS_REQUEST_SUCCESS));
    } catch (err) {
      dispatch(postsRequestFail(err.message));
    }
  };
};

export const postsAddOneThunk = (input: postDataElements) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsRequestStart(types.POSTS_ADD_ONE));
    updateToken();

    try {
      await axios.post(`${postsApiUrl}/posts`, input);

      alert('Added new post');
      dispatch(postsAddOne());
      dispatch(postsRequestSuccess(types.POSTS_ADD_ONE));
    } catch (err) {
      dispatch(postsRequestFail(err.message));
    }
  };
};

export const postsEditOneByIdThunk = (id: string, input: postDataElements) => {
  return async (dispatch: Dispatch<ActionTypes | any>) => {
    dispatch(postsRequestStart(types.POSTS_EDIT_ONE));
    updateToken();

    try {
      await axios.put(`${postsApiUrl}/post/${id}`, input);

      alert('Succesfullt edited');
      dispatch(postsEditOne());
      dispatch(postsRequestSuccess(types.POSTS_EDIT_ONE));
      dispatch(postsGetOneByIdThunk(id));
    } catch (err) {
      dispatch(postsRequestFail(err.message));
    }
  };
};

export const postsDeleteOneByIdThunk = (id: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsRequestStart(types.POSTS_DELETE_ONE));
    updateToken();

    try {
      let response = await axios.delete(`${postsApiUrl}/post/${id}`);

      alert('Successfully deleted this post');
      dispatch(postsDeleteOne(id));
      dispatch(postsRequestSuccess(types.POSTS_DELETE_ONE));
    } catch (err) {
      dispatch(postsRequestFail(err.message));
    }
  };
};
