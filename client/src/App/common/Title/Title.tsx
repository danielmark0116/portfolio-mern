import React, { useEffect } from 'react';
import { Fragment } from 'react';

import { fadeIn as animation } from '../../animations/fades';

interface IProps {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  animate?: Boolean;
  fadeDelay?: number;
  isSpaced?: Boolean;
}

export default function Title(props: IProps) {
  const { children, align, isSpaced } = props;

  const spacedStyles = { textAlign: align, margin: '0 30px 80px' };
  const nonSpacedStyles = { textAlign: align, margin: '0 30px 20px' };

  const titleRef = React.createRef<HTMLHeadingElement>();

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(titleRef.current, fadeDelay);
  }, []);

  return (
    <Fragment>
      <h1 ref={titleRef} style={nonSpacedStyles}>
        {children}
      </h1>
    </Fragment>
  );
}

Title.deafultProps = {
  children: 'Your text here...',
  align: 'center',
  animate: false,
  fadeDelay: 0,
  isSpaced: true
};
