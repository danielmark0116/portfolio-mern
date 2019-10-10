import React from 'react';

import Text from '../../common/Text/Text';

import { stateToProps } from './AboutContainer';

type Props = stateToProps;

const About = (props: Props) => {
  const { about } = props;
  return <Text htmlParse={true} html={about} />;
};

export default About;
