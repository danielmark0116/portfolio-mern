import { connect } from 'react-redux';

import ContactUpdate from './ContactUpdate';
import { AppState } from '../../../store';
import { selectorGeneralContacts } from '../../../reducers/generalsReducer';
import {
  generalsDataElements,
  generalsDataContact
} from '../../../types/generalsData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { generalsUpdateThunk } from '../../../actions/generalsActions';

export interface stateToProps {
  contactData: generalsDataContact;
}

export interface dispatchToProps {
  updateGenerals: Function;
}

const mapStateToProps = (state: AppState) => ({
  contactData: selectorGeneralContacts(state)
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
)(ContactUpdate);
