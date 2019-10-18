import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkDetails from './WorkDetails';
import { AppState } from '../../../../store';
import {
  selectorProjectsGetOne,
  selectorProjectsRequestData
} from '../../../../reducers/projectsReducer';
import { projectDataElements } from '../../../../types/projectData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../../actions/actionTypes';
import { projectsGetOneByIdThunk } from '../../../../actions/projectsActions';
import { requestData } from '../../../../types/requestData';
import Loader from '../../../common/Loader/Loader';

interface IProps {
  id: string;
}

type Props = IProps & stateToProps & dispatchToProps;

class WorkContainer extends Component<Props, {}> {
  componentDidMount() {
    const { getOneProject, id } = this.props;

    getOneProject(id);
  }

  render() {
    const { projectData } = this.props;
    const { pending, success, error } = this.props.requestData;

    if (projectData && projectData.published && success && !pending && !error)
      return <WorkDetails projectData={projectData} />;

    if (!projectData || error || !projectData.published)
      return <Loader></Loader>;
    if (pending) return <Loader></Loader>;
  }
}

interface stateToProps {
  projectData: projectDataElements;
  requestData: requestData;
}

interface dispatchToProps {
  getOneProject: Function;
}

const mapStateToProps = (state: AppState) => ({
  projectData: selectorProjectsGetOne(state),
  requestData: selectorProjectsRequestData(state)
});

const mapDispatchToState = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  getOneProject: (id: string) => dispatch(projectsGetOneByIdThunk(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(WorkContainer);
