import * as types from '../actions/actionTypes';
import { AppState } from '../store';
import { projectData, projectDataElements } from '../types/projectData';
import { requestData } from '../types/requestData';
import { ActionTypes } from '../actions/actionTypes';

// SELECTORS
export const selectorProjectsGetAll = (state: AppState): projectData[] => {
  return state.projects.projects;
};

export const selectorProjectsOrderValue = (
  state: AppState,
  id: string
): number => {
  return state.projects.projects.filter(project => project._id === id)[0].order;
};

export const selectorProjectsFilterPublished = (
  state: AppState
): projectData[] => {
  return state.projects.projects.filter(project => project.published === true);
};

export const selectorProjectsGetOne = (
  state: AppState
): projectDataElements => {
  return state.projects.singleProject;
};

export const selectorProjectsRequestData = (state: AppState): requestData => {
  return state.projects.requestData;
};

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
    case types.PROJECTS_GET_ONE:
      return { ...state, singleProject: action.payload };
    case types.PROJECTS_PUBLISH_ONE:
      return { ...state, singleProject: action.payload };
    case types.PROJECTS_UPDATE_ORDER:
      return {
        ...state,
        projects: state.projects.map(project =>
          project._id === action.payload.id
            ? { ...project, order: action.payload.value }
            : { ...project }
        )
      };
    case types.PROJECTS_ADD_ONE:
      return { ...state };
    case types.PROJECTS_EDIT_ONE:
      return { ...state };
    case types.PROJECTS_DELETE_ONE:
      return {
        ...state,
        projects: state.projects.filter(pro => pro._id !== action.payload)
      };
    case types.PROJECTS_RESET_STATE:
      return { ...state, project: [], singleProject: {} };
    case types.PROJECTS_REQUEST_START:
      return { ...state, requestData: action.payload };
    case types.PROJECTS_REQUEST_SUCCESS:
      return { ...state, requestData: action.payload };
    case types.PROJECTS_REQUEST_FAIL:
      return {
        ...state,
        requestData: action.payload
      };
    default:
      return state;
  }
}
