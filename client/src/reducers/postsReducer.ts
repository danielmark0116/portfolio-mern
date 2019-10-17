import * as types from '../actions/actionTypes';
import { requestData } from '../types/requestData';
import { postData, postDataElements } from '../types/postData';
import { AppState } from '../store';

// SELECTORS
export const selectorPostsGetAll = (state: AppState): postData[] => {
  return state.posts.posts;
};

export const selectorPostsGetOne = (state: AppState): postDataElements => {
  return state.posts.singlePost;
};

export const selectorPostsRequestData = (state: AppState): requestData => {
  return state.posts.requestData;
};

interface initState {
  posts: postData[];
  singlePost: postDataElements;
  requestData: requestData;
}

const initState: initState = {
  posts: [],
  singlePost: {
    title: '',
    content: '',
    author: ''
  },
  requestData: {
    error: false,
    success: false,
    pending: false,
    msg: ''
  }
};

export function postsReducer(
  state: initState = initState,
  action: types.ActionTypes
) {
  switch (action.type) {
    case types.POSTS_GET_ALL:
      return { ...state, posts: action.payload };
    case types.POSTS_GET_ONE:
      return { ...state, singlePost: action.payload };
    case types.POSTS_ADD_ONE:
      return { ...state };
    case types.POSTS_EDIT_ONE:
      return { ...state };
    case types.POSTS_DELETE_ONE:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case types.POSTS_REQUEST_START:
      return { ...state, requestData: action.payload };
    case types.POSTS_REQUEST_SUCCESS:
      return { ...state, requestData: action.payload };
    case types.POSTS_REQUEST_FAIL:
      return { ...state, requestData: action.payload };
    default:
      return state;
  }
}
