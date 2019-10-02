import React, { useEffect } from 'react';
import { Fragment } from 'react';

import { fadeIn as animation } from '../../animations/fades';

interface IProps {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  animate?: Boolean;
  fadeDelay?: number;
}

export default function Title(props: IProps) {
  const { children, align } = props;
  const alignStyles = {
    textAlign: align
  };

  const titleRef = React.createRef<HTMLHeadingElement>();

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(titleRef.current, fadeDelay);
  }, []);

  return (
    <Fragment>
      <h1 ref={titleRef} style={alignStyles}>
        {children}
      </h1>
    </Fragment>
  );
}

Title.deafultProps = {
  children: 'Your text here...',
  align: 'center',
  animate: false,
  fadeDelay: 0
};
