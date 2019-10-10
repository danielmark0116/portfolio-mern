import { connect } from 'react-redux';

import SubtitleUpdate from './SubtitleUpdate';
import { AppState } from '../../../store';
import { selectorGeneralSubtitle } from '../../../reducers/generalsReducer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { generalsDataElements } from '../../../types/generalsData';
import { generalsUpdateThunk } from '../../../actions/generalsActions';

export interface stateToProps {
  subtitle: string;
}

export interface dispatchToProps {
  updateGenerals: Function;
}

const mapStateToProps = (state: AppState) => ({
  subtitle: selectorGeneralSubtitle(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  updateGenerals: (data: generalsDataElements) =>
    dispatch(generalsUpdateThunk(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubtitleUpdate);
