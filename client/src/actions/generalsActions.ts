import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { generalsData } from '../types/generalsData';
import { Dispatch } from 'redux';
import axios from 'axios';

// ACTIONS
export const generalsGetAll = (): ActionTypes => ({
  type: types.GENERALS_GET_ALL
});

export const generalsGetAllSuccess = (payload: generalsData): ActionTypes => ({
  type: types.GENERALS_GET_ALL_SUCCESS,
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

      const {
        nameId,
        githubLink,
        instagramLink,
        linkedInLink,
        subtitle,
        about,
        email,
        phone
      } = data;

      dispatch(
        generalsGetAllSuccess({
          nameId,
          githubLink,
          instagramLink,
          linkedInLink,
          subtitle,
          about,
          email,
          phone
        })
      );

      dispatch(requestSuccess());
    } catch (err) {
      dispatch(requestFail(err.message));
    }
  };
};
