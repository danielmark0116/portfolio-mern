import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import ProjectForm from './PostForm';
import { AppState } from '../../../store';
import {
  selectorProjectsRequestData,
  selectorProjectsGetOne
} from '../../../reducers/projectsReducer';
import { projectDataElements } from '../../../types/projectData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import {
  projectsAddOneThunk,
  projectsEditOneThunk,
  projectsGetOneByIdThunk
} from '../../../actions/projectsActions';
import { requestData } from '../../../types/requestData';
import { postDataElements } from '../../../types/postData';
import {
  selectorPostsGetOne,
  selectorPostsRequestData
} from '../../../reducers/postsReducer';
import {
  postsGetOneByIdThunk,
  postsAddOneThunk,
  postsEditOneByIdThunk
} from '../../../actions/postsActions';

interface PathParamsType {
  id: string;
}

interface IProps {
  edit: Boolean;
  picDisable: Boolean;
}

export interface stateToProps {
  requestData: requestData;
  singlePost: postDataElements;
  idToEdit: string;
  edit: Boolean;
  picDisable: Boolean;
}

export interface dispatchToProps {
  addPost: Function;
  editPost: Function;
  getOne: Function;
}

const mapStateToProps = (
  state: AppState,
  ownProps: IProps & RouteComponentProps<PathParamsType>
) => ({
  requestData: selectorPostsRequestData(state),
  singlePost: selectorPostsGetOne(state),
  edit: ownProps.edit,
  idToEdit: ownProps.match.params.id,
  picDisable: ownProps.picDisable
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  addPost: (data: postDataElements) => dispatch(postsAddOneThunk(data)),
  editPost: (id: string, data: postDataElements, withPic: Boolean) =>
    dispatch(postsEditOneByIdThunk(id, data)),
  getOne: (id: string) => dispatch(postsGetOneByIdThunk(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectForm)
);
