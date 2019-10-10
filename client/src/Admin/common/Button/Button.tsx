import React from 'react';

import style from './button.module.scss';

interface IProps {
  type: 'primary' | 'secondary';
  children: string;
  action: Function;
}

const Button = (props: IProps) => {
  const { type, children, action } = props;

  return (
    <button
      className={
        type === 'primary'
          ? style.admin_button_primary
          : type === 'secondary'
          ? style.admin_button_secondary
          : ''
      }
      onClick={() => action()}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  action: () => null
};

export default Button;
