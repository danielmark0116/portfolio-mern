import * as types from '../actions/actionTypes';
import { ActionTypes } from '../actions/actionTypes';
import { generalsData } from '../types/generalsData';
import { requestData } from '../types/requestData';

// SELECTORS
export const test = (): null => null;

// GENERALS REDUCER
interface initState {
  generalsData: generalsData;
  requestData: requestData;
}

const initState: initState = {
  generalsData: {
    nameId: 'generals',
    githubLink: 'http://github.com',
    instagramLink: 'http://instagram.com',
    linkedInLink: 'http://linkedin.com',
    subtitle: '- -',
    about: '',
    email: 'mail@mail@gmail.com',
    phone: '888 999 777'
  },
  requestData: {
    error: false,
    success: false,
    pending: false,
    errorMsg: ''
  }
};

// REDUCER
export function generalsReducer(
  state: initState = initState,
  action: ActionTypes
) {
  switch (action.type) {
    case types.GENERALS_GET_ALL:
      return state;
    case types.GENERALS_GET_ALL_SUCCESS:
      return { ...state, generalsData: action.payload };
    case types.REQUEST_START:
      return {
        ...state,
        requestData: {
          error: false,
          success: false,
          pending: true,
          errorMsg: ''
        }
      };
    case types.REQUEST_FAIL:
      return {
        ...state,
        requestData: {
          error: true,
          success: false,
          pending: false,
          errorMsg: action.payload
        }
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        requestData: {
          error: false,
          success: true,
          pending: false,
          errorMsg: ''
        }
      };
    default:
      return state;
  }
}
