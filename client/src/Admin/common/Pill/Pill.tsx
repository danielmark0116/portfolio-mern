import React from 'react';

import style from './pill.module.scss';

interface IProps {
  children: string;
  type: 'primary' | 'success' | 'danger';
}

const Pill = (props: IProps) => {
  const { children, type } = props;

  return (
    <div
      className={`${
        type === 'danger'
          ? style.pill_box_danger
          : type === 'success'
          ? style.pill_box_success
          : style.pill_box
      }`}
    >
      {children}
    </div>
  );
};

Pill.defaultProps = {
  type: 'primary'
};

export default Pill;
