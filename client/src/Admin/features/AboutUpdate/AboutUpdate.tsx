import React, { Fragment, useState } from 'react';

import { stateToProps } from './AboutUpdateContainer';
import { dispatchToProps } from '../LinksUpdate/LinksUpdateContainer';

import Subtitle from '../../common/Subtitle/Subtitle';
import TextBox from '../../common/TextBox/TextBox';
import ActionBtn from '../../common/ActionBtn/ActionBtn';
import Form from '../../common/Form/Form';
import { generalsDataElements } from '../../../types/generalsData';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const SubtitleUpdate = (props: Props) => {
  const { about, updateGenerals } = props;
  const [edit, triggerEdit] = useState(false);

  return (
    <Fragment>
      <Subtitle>
        <Fragment>
          About
          <ActionBtn action={() => triggerEdit(!edit)}></ActionBtn>
        </Fragment>
      </Subtitle>

      {edit ? (
        <Form
          submitAction={(data: generalsDataElements) => {
            updateGenerals(data);
            triggerEdit(!edit);
          }}
          cancelAction={() => triggerEdit(!edit)}
          inputs={[
            {
              fieldName: 'about',
              label: '',
              initValue: about,
              extended: true
            }
          ]}
        />
      ) : (
        <TextBox html={about} htmlParse={true}></TextBox>
      )}
    </Fragment>
  );
};

export default SubtitleUpdate;
