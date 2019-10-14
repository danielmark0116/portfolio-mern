import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: string | React.ReactChild;
  active: Boolean;
  size: 'small' | 'large' | 'xlarge';
  action: Function;
  color: 'blue' | 'purple' | 'dark';
}

const Link = (props: IProps) => {
  const { children, active, size, action, color } = props;

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
          : size === 'xlarge'
          ? style.link_xlarge
          : ''
      } ${active ? style.link_active : ''} ${
        color === 'blue'
          ? style.link_blue
          : color === 'purple'
          ? style.link_purple
          : ''
      }`}
    >
      {children}
    </div>
  );
};

Link.defaultProps = {
  action: () => null,
  active: false,
  color: 'dark'
};

export default Link;
