import { connect } from 'react-redux';

import Contact from './Contact.presentational';
import { AppState } from '../../../../store';
import {
  selectorGeneralContacts,
  selectorGeneralsLinks
} from '../../../../reducers/generalsReducer';
import {
  generalsDataContact,
  generalsDataLinks
} from '../../../../types/generalsData';

export interface stateToProps {
  contactData: generalsDataContact;
  links: generalsDataLinks;
}

const mapStateToProps = (state: AppState) => ({
  contactData: selectorGeneralContacts(state),
  links: selectorGeneralsLinks(state)
});

export default connect(mapStateToProps)(Contact);
