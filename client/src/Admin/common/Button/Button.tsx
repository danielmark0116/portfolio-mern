import React from 'react';

import style from './button.module.scss';

interface IProps {
  type: 'primary' | 'secondary';
  children: string;
  action: Function;
  size: 'small' | 'large';
}

const Button = (props: IProps) => {
  const { type, children, action, size } = props;

  return (
    <button
      className={
        type === 'primary'
          ? style.admin_button_primary
          : type === 'secondary'
          ? style.admin_button_secondary
          : ''
      }
      style={size === 'small' ? { fontSize: 12, padding: '8px 15px' } : {}}
      onClick={() => action()}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  action: () => null,
  size: 'large'
};

export default Button;
