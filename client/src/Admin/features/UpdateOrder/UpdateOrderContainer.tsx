import { connect } from 'react-redux';

import UpdateOrder from './UpdateOrder';
import { AppState } from '../../../store';
import { selectorProjectsOrderValue } from '../../../reducers/projectsReducer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { projectsUpdateOneThunk } from '../../../actions/projectsActions';

interface IProps {
  id: string;
}

export interface stateToProps {
  value: number;
  projectId: string;
}

export interface dispatchToProps {
  updateOrder: Function;
}

const mapStateToProps = (state: AppState, ownProps: IProps) => ({
  value: selectorProjectsOrderValue(state, ownProps.id),
  projectId: ownProps.id
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  updateOrder: (id: string, value: number) =>
    dispatch(projectsUpdateOneThunk(id, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateOrder);
