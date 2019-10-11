import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';

export const requestStart = (msg: string = ''): ActionTypes => ({
  type: types.REQUEST_START,
  payload: {
    error: false,
    pending: true,
    success: false,
    msg: msg
  }
});

export const requestFail = (
  errMsg: string = '',
  secMsg: string = ''
): ActionTypes => ({
  type: types.REQUEST_FAIL,
  payload: {
    error: true,
    pending: false,
    success: false,
    msg: errMsg + ' ' + secMsg
  }
});

export const requestSuccess = (
  successMsg: string = '',
  secMsg: string = ''
): ActionTypes => ({
  type: types.REQUEST_SUCCESS,
  payload: {
    error: false,
    pending: false,
    success: true,
    msg: successMsg + ' ' + secMsg
  }
});
