import React from 'react';

import Text from '../../../common/Text/Text';

import { stateToProps } from './SubtitleContainer';

type Props = stateToProps;

const Subtitle = (props: Props) => {
  const { subtitle } = props;

  return (
    <Text animate={true} align="center" fadeDelay={2.5}>
      {subtitle}
    </Text>
  );
};

export default Subtitle;
