import * as types from '../actions/actionTypes';
import { AppState } from '../store';
import { projectData, projectDataElements } from '../types/projectData';
import { requestData } from '../types/requestData';
import { ActionTypes } from '../actions/actionTypes';

// SELECTORS
export const selectorProjectsGetAll = (state: AppState) => ({
  te: 'st'
});

// PROJECTS REDUCER
interface initState {
  requestData: requestData;
  projects: projectData[];
  singleProject: projectDataElements;
}

const initState: initState = {
  requestData: {
    error: false,
    success: false,
    pending: false,
    msg: ''
  },
  projects: [],
  singleProject: {}
};

export function projectsReducer(
  state: initState = initState,
  action: ActionTypes
) {
  switch (action.type) {
    case types.PROJECTS_GET_ALL:
      return { ...state, projects: action.payload };
    case types.PROJECTS_GET_ONLY_PUBLISHED:
      return { ...state, projects: action.payload };
    case types.REQUEST_START:
      return { ...state, requestData: action.payload };
    case types.REQUEST_SUCCESS:
      return { ...state, requestData: action.payload };
    case types.REQUEST_FAIL:
      return {
        ...state,
        requestData: action.payload
      };
    default:
      return state;
  }
}
