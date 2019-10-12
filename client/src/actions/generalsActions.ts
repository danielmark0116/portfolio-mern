import axios from 'axios';

import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { generalsData, generalsDataElements } from '../types/generalsData';
import { Dispatch } from 'redux';

import { updateToken } from '../utils/fetchToken';
import { formatResponse } from '../utils/generalsData';

updateToken();

// ACTIONS
export const generalsGetAll = (): ActionTypes => ({
  type: types.GENERALS_GET_ALL
});

export const generalsGetAllSuccess = (payload: generalsData): ActionTypes => ({
  type: types.GENERALS_GET_ALL_SUCCESS,
  payload
});

export const generalsUpdate = (): ActionTypes => ({
  type: types.GENERALS_UPDATE
});

export const generalsUpdateSuccess = (payload: generalsData): ActionTypes => ({
  type: types.GENERALS_UPDATE_SUCCESS,
  payload
});

export const generalsRequestStart = (msg: string = ''): ActionTypes => ({
  type: types.GENERALS_REQUEST_START,
  payload: {
    error: false,
    pending: true,
    success: false,
    msg: msg
  }
});

export const generalsRequestSuccess = (msg: string = ''): ActionTypes => ({
  type: types.GENERALS_REQUEST_SUCCESS,
  payload: {
    error: false,
    pending: false,
    success: true,
    msg: msg
  }
});

export const generalsRequestFail = (msg: string = ''): ActionTypes => ({
  type: types.GENERALS_REQUEST_FAIL,
  payload: {
    error: true,
    pending: false,
    success: false,
    msg: msg
  }
});

// THUNKS
export const generalsGetAllThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(generalsRequestStart());
    dispatch(generalsGetAll());

    try {
      let response = await axios.get('/general');
      let data = response.data.generals;

      dispatch(generalsGetAllSuccess(formatResponse(data)));

      dispatch(generalsRequestSuccess());
    } catch (err) {
      dispatch(generalsRequestFail(err.message));
    }
  };
};

export const generalsUpdateThunk = (data: generalsDataElements) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(generalsRequestStart());
    dispatch(generalsUpdate());
    updateToken();

    try {
      let response = await axios.put('/general', data);
      let resData = await response.data.response;

      dispatch(generalsUpdateSuccess(formatResponse(resData)));
      dispatch(generalsRequestSuccess());
    } catch (err) {
      dispatch(generalsRequestFail(err.message));
    }
  };
};
