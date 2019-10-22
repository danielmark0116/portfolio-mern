import * as types from '../actions/actionTypes';
import { ActionTypes } from '../actions/actionTypes';
import {
  generalsData,
  generalsDataLinks,
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
    githubLink: 'https://github.com/danielmark0116',
    instagramLink: 'https://www.instagram.com/danielmark.thedev/',
    linkedInLink: 'http://linkedin.com',
    subtitle: '- web developer -',
    about: '',
    email: 'grychtol.daniel@gmail.com',
    phone: '691 051 601'
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
    case types.GENERALS_REQUEST_START:
      return {
        ...state,
        requestData: action.payload
      };
    case types.GENERALS_REQUEST_FAIL:
      return {
        ...state,
        requestData: action.payload
      };
    case types.GENERALS_REQUEST_SUCCESS:
      return {
        ...state,
        requestData: action.payload
      };
    default:
      return state;
  }
}
