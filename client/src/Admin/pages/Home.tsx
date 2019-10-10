import React, { Component, Fragment } from 'react';

import Form from '../common/Form/Form';

import LinksUpdate from '../features/LinksUpdate/LinksUpdateContainer';

const inputsW = [
  {
    fieldName: 'githubLink',
    label: '',
    initValue: 'tutaj to <b>bylo</b> juz',
    extended: true
  },
  {
    fieldName: 'instagramLink',
    label: 'test label from here',
    initValue: 'extended',
    extended: false
  }
];

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <LinksUpdate></LinksUpdate>
        <Form
          submitAction={(data: any) => console.log(data)}
          cancelAction={() => console.log('cancel')}
          inputs={inputsW}
        ></Form>
      </Fragment>
    );
  }
}
