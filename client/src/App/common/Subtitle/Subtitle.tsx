import React, { useEffect } from 'react';
import { Fragment } from 'react';

import { fadeIn as animation } from '../../animations/fades';

interface IProps {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  animate?: Boolean;
  fadeDelay?: number;
}

export default function Subtitle(props: IProps) {
  const { children, align } = props;

  const styles = {
    textAlign: align,
    margin: '0 0 40px'
  };

  const titleRef = React.createRef<HTMLHeadingElement>();

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(titleRef.current, fadeDelay);
  }, []);

  return (
    <Fragment>
      <h2 ref={titleRef} style={styles}>
        {children}
      </h2>
    </Fragment>
  );
}

Subtitle.deafultProps = {
  children: 'Your text here...',
  align: 'left',
  animate: false,
  fadeDelay: 0
};
