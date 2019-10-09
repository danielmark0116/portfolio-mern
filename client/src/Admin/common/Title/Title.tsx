import React from 'react';

import style from './title.module.scss';

interface IProps {
  children: React.ReactChild | string;
  align?: 'center' | 'left' | 'right';
  transform?: 'none' | 'uppercase' | 'capitalize';
}

const Title = (props: IProps) => {
  const { children, align, transform } = props;

  const propStyles = {
    textAlign: align,
    textTransform: transform
  };

  return (
    <h1 className={style.title} style={propStyles}>
      {children}
    </h1>
  );
};

Title.defaultProps = {
  align: 'left',
  transform: 'none'
};

export default Title;
