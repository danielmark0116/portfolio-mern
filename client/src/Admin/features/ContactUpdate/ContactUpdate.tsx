import React, { Fragment, useState } from 'react';
import { stateToProps, dispatchToProps } from './ContactUpdateContainer';

import Title from '../../common/Title/Title';
import Subtitle from '../../common/Subtitle/Subtitle';
import TextBox from '../../common/TextBox/TextBox';
import ActionBtn from '../../common/ActionBtn/ActionBtn';
import Form from '../../common/Form/Form';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const LinksUpdate = (props: Props) => {
  const { contactData } = props;
  const [editLinks, triggerEdit] = useState({
    phone: false,
    email: false
  });

  const getTriggerValue = (string: string) => {
    let value;
    Object.keys(editLinks).forEach((item, index) => {
      if (item === string) {
        value = Object.values(editLinks)[index];
      }
    });
    return value;
  };

  return (
    <Fragment>
      <Title>Contact</Title>
      {Object.keys(contactData).map((keyName, index) => (
        <div key={index}>
          <Subtitle>
            <Fragment>
              {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
              <ActionBtn
                action={() => {
                  triggerEdit({
                    ...editLinks,
                    [keyName]: !getTriggerValue(keyName)
                  });
                }}
              ></ActionBtn>
            </Fragment>
          </Subtitle>
          {getTriggerValue(keyName) ? (
            <Form
              submitAction={(data: any) => {
                props.updateGenerals(data);
                triggerEdit({
                  ...editLinks,
                  [keyName]: !getTriggerValue(keyName)
                });
              }}
              cancelAction={() => {
                triggerEdit({
                  ...editLinks,
                  [keyName]: !getTriggerValue(keyName)
                });
              }}
              inputs={[
                {
                  fieldName: keyName,
                  label: '',
                  initValue: Object.values(contactData)[index],
                  extended: false
                }
              ]}
            />
          ) : (
            <TextBox>{Object.values(contactData)[index]}</TextBox>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default LinksUpdate;
