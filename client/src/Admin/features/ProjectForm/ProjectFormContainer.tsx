import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import ProjectForm from './ProjectForm';
import { AppState } from '../../../store';
import {
  selectorProjectsGetAll,
  selectorProjectsRequestData,
  selectorProjectsGetOne
} from '../../../reducers/projectsReducer';
import { projectData, projectDataElements } from '../../../types/projectData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import {
  projectsAddOneThunk,
  projectsEditOneThunk,
  projectsGetOneByIdThunk
} from '../../../actions/projectsActions';
import { requestData } from '../../../types/requestData';

interface PathParamsType {
  id: string;
}

interface IProps {
  edit: Boolean;
}

export interface stateToProps {
  requestData: requestData;
  singleProject: projectDataElements;
  idToEdit: string;
  edit: Boolean;
}

export interface dispatchToProps {
  addProject: Function;
  editProject: Function;
  getOne: Function;
}

const mapStateToProps = (
  state: AppState,
  ownProps: IProps & RouteComponentProps<PathParamsType>
) => ({
  requestData: selectorProjectsRequestData(state),
  singleProject: selectorProjectsGetOne(state),
  edit: ownProps.edit,
  idToEdit: ownProps.match.params.id
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  addProject: (data: FormData) => dispatch(projectsAddOneThunk(data)),
  editProject: (id: string, data: FormData, withPic: Boolean) =>
    dispatch(projectsEditOneThunk(id, data, withPic)),
  getOne: (id: string) => dispatch(projectsGetOneByIdThunk(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectForm)
);
