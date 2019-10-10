import React, { Component, Fragment } from 'react';

import Title from '../common/Title/Title';
import Subtitle from '../common/Subtitle/Subtitle';
import ActionBtn from '../common/ActionBtn/ActionBtn';
import TextInput from '../common/TextInput/TextInput';
import TextBox from '../common/TextBox/TextBox';
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
        <br />
        <br />
        <br />
        <Title>Links</Title>
        <Subtitle>
          <Fragment>
            Github
            <ActionBtn action={() => console.log('action')}></ActionBtn>
          </Fragment>
        </Subtitle>
        <TextInput
          name="mock"
          extended={true}
          value="initial value"
        ></TextInput>
        <TextBox>parser working</TextBox>
        <h1>form</h1>
        <Form
          submitAction={(data: any) => console.log(data)}
          cancelAction={() => console.log('cancel')}
          inputs={inputsW}
        ></Form>
      </Fragment>
    );
  }
}
