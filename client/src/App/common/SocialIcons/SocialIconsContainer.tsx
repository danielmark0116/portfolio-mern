import { connect } from 'react-redux';

import SocialIcons from './SocialIcons';
import { AppState } from '../../../store';
import { selectorGeneralsLinks } from '../../../reducers/generalsReducer';
import { generalsDataLinks } from '../../../types/generalsData';

export interface stateToProps {
  links: generalsDataLinks;
}

const mapStateToProps = (state: AppState) => ({
  links: selectorGeneralsLinks(state)
});

export default connect(mapStateToProps)(SocialIcons);
