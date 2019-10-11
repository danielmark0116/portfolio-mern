import * as types from '../actions/actionTypes';
import { ActionTypes } from '../actions/actionTypes';
import {
  generalsData,
  generalsDataLinks,
  generalsDataElements,
  generalsDataContact
} from '../types/generalsData';
import { requestData } from '../types/requestData';
import { AppState } from '../store';

// SELECTORS
export const selectorGeneralsLinks = (state: AppState): generalsDataLinks => {
  return {
    instagramLink: state.generals.generalsData.instagramLink,
    githubLink: state.generals.generalsData.githubLink,
    linkedInLink: state.generals.generalsData.linkedInLink
  };
};

export const selectorGeneralContacts = (
  state: AppState
): generalsDataContact => {
  return {
    phone: state.generals.generalsData.phone,
    email: state.generals.generalsData.email
  };
};

export const selectorGeneralSubtitle = (state: AppState): string =>
  state.generals.generalsData.subtitle;

export const selectorGeneralAbout = (state: AppState): string =>
  state.generals.generalsData.about;

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
    msg: ''
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
    case types.GENERALS_UPDATE_SUCCESS:
      return { ...state, generalsData: action.payload };
    case types.REQUEST_START:
      return {
        ...state,
        requestData: action.payload
      };
    case types.REQUEST_FAIL:
      return {
        ...state,
        requestData: action.payload
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        requestData: action.payload
      };
    default:
      return state;
  }
}
