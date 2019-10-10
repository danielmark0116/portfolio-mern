import React, { Fragment, useState } from 'react';

import { stateToProps } from './SubtitleUpdateContainer';
import { dispatchToProps } from '../LinksUpdate/LinksUpdateContainer';

import Subtitle from '../../common/Subtitle/Subtitle';
import TextBox from '../../common/TextBox/TextBox';
import ActionBtn from '../../common/ActionBtn/ActionBtn';
import Form from '../../common/Form/Form';
import { generalsDataElements } from '../../../types/generalsData';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const SubtitleUpdate = (props: Props) => {
  const { subtitle, updateGenerals } = props;
  const [edit, triggerEdit] = useState(false);

  return (
    <Fragment>
      <Subtitle>
        <Fragment>
          Subtitle
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
              fieldName: 'subtitle',
              label: '',
              initValue: subtitle,
              extended: false
            }
          ]}
        />
      ) : (
        <TextBox>{subtitle}</TextBox>
      )}
    </Fragment>
  );
};

export default SubtitleUpdate;
