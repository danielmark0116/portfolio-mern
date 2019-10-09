import { connect } from 'react-redux';

import LinksUpdate from './LinksUpdate';
import { AppState } from '../../../store';
import { selectorGeneralsLinks } from '../../../reducers/generalsReducer';
import {
  generalsDataLinks,
  generalsDataElements
} from '../../../types/generalsData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../actions/actionTypes';
import { generalsUpdateThunk } from '../../../actions/generalsActions';

export interface stateToProps {
  links: generalsDataLinks;
}

export interface dispatchToProps {
  updateGenerals: Function;
}

const mapStateToProps = (state: AppState) => ({
  links: selectorGeneralsLinks(state)
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
)(LinksUpdate);
