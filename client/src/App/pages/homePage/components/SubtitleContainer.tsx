import { connect } from 'react-redux';

import Subtitle from './Subtitle.presentational';
import { AppState } from '../../../../store';
import { selectorGeneralSubtitle } from '../../../../reducers/generalsReducer';

export interface stateToProps {
  subtitle: string;
}

const mapStateToProps = (state: AppState) => ({
  subtitle: selectorGeneralSubtitle(state)
});

export default connect(mapStateToProps)(Subtitle);
