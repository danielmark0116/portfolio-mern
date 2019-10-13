import React from 'react';

import Button from '../Button/Button';

import style from './switch.module.scss';

interface IProps {
  active: Boolean;
  activeText: string;
  inactiveText: string;
  action: Function;
}

const Switch = (props: IProps) => {
  const { active, inactiveText, activeText, action } = props;

  return (
    <div className={style.switch}>
      <Button
        size="small"
        action={() => action()}
        type={active ? 'primary' : 'secondary'}
      >
        {active ? activeText : inactiveText}
      </Button>
    </div>
  );
};

Switch.defaultProps = {
  activeText: 'on',
  inactiveText: 'off'
};

export default Switch;
