import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { generalsData, generalsDataElements } from '../types/generalsData';
import { Dispatch } from 'redux';
import axios from 'axios';

import { fetchToken } from '../utils/fetchToken';
import { formatResponse } from '../utils/generalsData';

let token = fetchToken();
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
function updateToken(): void {
  axios.defaults.headers.common['Authorization'] = `Bearer ${fetchToken()}`;
}

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

export const requestStart = (): ActionTypes => ({
  type: types.REQUEST_START
});

export const requestFail = (errMsg: string = ''): ActionTypes => ({
  type: types.REQUEST_FAIL,
  payload: errMsg
});

export const requestSuccess = (errMsg: string = ''): ActionTypes => ({
  type: types.REQUEST_SUCCESS,
  payload: errMsg
});

// THUNKS
export const generalsGetAllThunk = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(generalsGetAll());
    dispatch(requestStart());

    try {
      let response = await axios.get('/general');
      let data = response.data.generals;

      dispatch(generalsGetAllSuccess(formatResponse(data)));

      dispatch(requestSuccess());
    } catch (err) {
      dispatch(requestFail(err.message));
    }
  };
};

export const generalsUpdateThunk = (data: generalsDataElements) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(generalsUpdate());
    dispatch(requestStart());
    updateToken();

    try {
      let response = await axios.put('/general', data);
      let resData = await response.data.response;

      dispatch(generalsUpdateSuccess(formatResponse(resData)));
      dispatch(requestSuccess());
    } catch (err) {
      dispatch(requestFail(err.message));
    }
  };
};
