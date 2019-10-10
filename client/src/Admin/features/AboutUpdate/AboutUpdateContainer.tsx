import { connect } from 'react-redux';

import AboutUpdate from './AboutUpdate';
import { AppState } from '../../../store';
import { selectorGeneralAbout } from '../../../reducers/generalsReducer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { generalsDataElements } from '../../../types/generalsData';
import { generalsUpdateThunk } from '../../../actions/generalsActions';

export interface stateToProps {
  about: string;
}

export interface dispatchToProps {
  updateGenerals: Function;
}

const mapStateToProps = (state: AppState) => ({
  about: selectorGeneralAbout(state)
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
)(AboutUpdate);
