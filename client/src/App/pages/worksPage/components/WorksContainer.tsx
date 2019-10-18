import React, { Component } from 'react';
import { connect } from 'react-redux';

import Works from './Works.presentational';
import Loader from '../../../common/Loader/Loader';

import { AppState } from '../../../../store';
import {
  selectorProjectsFilterPublished,
  selectorProjectsRequestData
} from '../../../../reducers/projectsReducer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../../actions/actionTypes';
import { projectsGetOnlyPublishedThunk } from '../../../../actions/projectsActions';
import { projectData } from '../../../../types/projectData';
import { requestData } from '../../../../types/requestData';

interface IProps {}

interface IState {}

type Props = stateToProps & dispatchToProps & IProps;

class WorksContainer extends Component<Props, IState> {
  componentDidMount() {
    const { getPublished } = this.props;

    getPublished();
  }

  render() {
    const { projects } = this.props;
    const { pending, success, error } = this.props.requestData;

    if (projects.length === 0 && !success && !pending && !error)
      return <p>No projects</p>;
    if (!pending && success && !error && projects.length > 0)
      return <Works projects={projects} />;
    return <Loader></Loader>;
  }
}

interface stateToProps {
  projects: projectData[];
  requestData: requestData;
}

interface dispatchToProps {
  getPublished: Function;
}

const mapStateToProps = (state: AppState) => ({
  projects: selectorProjectsFilterPublished(state),
  requestData: selectorProjectsRequestData(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  getPublished: () => dispatch(projectsGetOnlyPublishedThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksContainer);
