import React from 'react';

import style from './subtitle.module.scss';

interface IProps {
  children: React.ReactChild | string;
  align?: 'center' | 'left' | 'right';
  transform?: 'none' | 'uppercase' | 'capitalize';
}

const Subtitle = (props: IProps) => {
  const { children, align, transform } = props;

  const propStyles = {
    textAlign: align,
    textTransform: transform
  };

  return (
    <h1 className={style.subtitle} style={propStyles}>
      {children}
    </h1>
  );
};

Subtitle.defaultProps = {
  align: 'left',
  transform: 'none'
};

export default Subtitle;
