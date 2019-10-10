import React, { Component, Fragment } from 'react';

import SizedBox from '../common/SizedBox/SizedBox';
import LinksUpdate from '../features/LinksUpdate/LinksUpdateContainer';
import SubtitleUpdate from '../features/SubtitleUpdate/SubtitleUpdateContainer';
import AboutUpdate from '../features/AboutUpdate/AboutUpdateContainer';
import ContactUpdate from '../features/ContactUpdate/ContactUpdateContainer';
import Title from '../common/Title/Title';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <LinksUpdate></LinksUpdate>
        <hr />
        <SizedBox space={40} />
        <ContactUpdate></ContactUpdate>
        <hr />
        <SizedBox space={40} />
        <Title>Other</Title>
        <SubtitleUpdate></SubtitleUpdate>
        <AboutUpdate></AboutUpdate>
        <hr />
        <SizedBox space={80} />
      </Fragment>
    );
  }
}
