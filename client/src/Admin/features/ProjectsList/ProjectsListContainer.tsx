import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import ProjectsList from './ProjectsList';
import { AppState } from '../../../store';
import {
  selectorProjectsGetAll,
  selectorProjectsRequestData
} from '../../../reducers/projectsReducer';
import { projectData } from '../../../types/projectData';
import { requestData } from '../../../types/requestData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import {
  projectsGetAllThunk,
  projectsPublishOneThunk,
  projectsDeleteByIdThunk
} from '../../../actions/projectsActions';

export interface stateToProps {
  projects: projectData[];
  requestData: requestData;
}

export interface dispatchToProps {
  getAll: Function;
  publish: Function;
  deleteProject: Function;
}

const mapStateToProps = (state: AppState) => ({
  projects: selectorProjectsGetAll(state),
  requestData: selectorProjectsRequestData(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  getAll: () => dispatch(projectsGetAllThunk()),
  publish: (id: string) => dispatch(projectsPublishOneThunk(id)),
  deleteProject: (id: string) => dispatch(projectsDeleteByIdThunk(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
