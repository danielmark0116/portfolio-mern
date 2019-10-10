import React, { Fragment, useState } from 'react';
import { stateToProps, dispatchToProps } from './LinksUpdateContainer';

import Title from '../../common/Title/Title';
import Subtitle from '../../common/Subtitle/Subtitle';
import TextBox from '../../common/TextBox/TextBox';
import ActionBtn from '../../common/ActionBtn/ActionBtn';
import Form from '../../common/Form/Form';

interface IProps {}

type Props = stateToProps & dispatchToProps & IProps;

const LinksUpdate = (props: Props) => {
  const { links } = props;
  const [editLinks, triggerEdit] = useState({
    githubLink: false,
    instagramLink: false,
    linkedInLink: false
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

  const formatName = (string: string): string => {
    if (string.includes('instagram')) return 'Instagram';
    if (string.includes('github')) return 'Github';
    if (string.includes('linkedIn')) return 'LinkedIn';
    return '';
  };

  return (
    <Fragment>
      <Title>Links</Title>
      {Object.keys(links).map((keyName, index) => (
        <div key={index}>
          <Subtitle>
            <Fragment>
              {formatName(keyName)}
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
                  initValue: Object.values(links)[index],
                  extended: false
                }
              ]}
            />
          ) : (
            <TextBox>{Object.values(links)[index]}</TextBox>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default LinksUpdate;
