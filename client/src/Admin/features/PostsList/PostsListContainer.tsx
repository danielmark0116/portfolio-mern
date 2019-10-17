import { connect } from 'react-redux';

import PostsList from './PostsList';
import { AppState } from '../../../store';
import { requestData } from '../../../types/requestData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { postData } from '../../../types/postData';
import {
  selectorPostsGetAll,
  selectorPostsRequestData
} from '../../../reducers/postsReducer';
import {
  postsGetAllThunk,
  postsDeleteOneByIdThunk
} from '../../../actions/postsActions';

export interface stateToProps {
  posts: postData[];
  requestData: requestData;
}

export interface dispatchToProps {
  getAll: Function;
  deletePost: Function;
}

const mapStateToProps = (state: AppState) => ({
  posts: selectorPostsGetAll(state),
  requestData: selectorPostsRequestData(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  getAll: () => dispatch(postsGetAllThunk()),
  deletePost: (id: string) => dispatch(postsDeleteOneByIdThunk(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
