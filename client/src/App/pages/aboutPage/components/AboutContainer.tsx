import { connect } from 'react-redux';

import About from './About.presentational';
import { AppState } from '../../../../store';
import { selectorGeneralAbout } from '../../../../reducers/generalsReducer';

export interface stateToProps {
  about: string;
}

const mapStateToProps = (state: AppState) => ({
  about: selectorGeneralAbout(state)
});

export default connect(mapStateToProps)(About);
