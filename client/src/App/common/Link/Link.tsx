import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: string;
  active: Boolean;
  size: 'small' | 'large';
  action: Function;
}

const Link = (props: IProps) => {
  const { children, active, size, action } = props;
  return (
    <div
      onClick={() => {
        action();
      }}
      className={`${
        size === 'small'
          ? style.link_small
          : size === 'large'
          ? style.link_large
          : ''
      } ${active ? style.link_active : ''}`}
    >
      {children}
    </div>
  );
};

Link.defaultProps = {
  action: () => null
};

export default Link;
