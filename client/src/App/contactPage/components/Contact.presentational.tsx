import React, { Fragment } from 'react';

import Subtitle from '../../common/Subtitle/Subtitle';
import Text from '../../common/Text/Text';
import Link from '../../common/Link/Link';

import { stateToProps } from './ContactContainer';

type Props = stateToProps;

const Contact = (props: Props) => {
  const { links, contactData } = props;

  return (
    <Fragment>
      <Text>Call me</Text>
      <Subtitle>{contactData.phone}</Subtitle>
      <Text>Email me</Text>
      <Subtitle>{contactData.email}</Subtitle>
      <Text>Or find me here</Text>
      <Link size="large" color="dark">
        <a href={links.githubLink} target="_blank">
          Github
        </a>
      </Link>
      <br />
      <Link size="large" color="blue">
        <a href={links.linkedInLink} target="_blank">
          LinkedIN
        </a>
      </Link>
      <br />
      <Link size="large" color="purple">
        <a href={links.instagramLink} target="_blank">
          Instagram
        </a>
      </Link>
      <br />
    </Fragment>
  );
};

export default Contact;
