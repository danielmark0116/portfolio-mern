import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  clickAction: Function;
  active: Boolean;
}

const HamburgerIcon = (props: IProps) => {
  return (
    <div
      className={`${style.hamburger_icon} ${
        props.active ? style.hamburger_icon_active : ''
      }`}
      onClick={() => {
        props.clickAction();
        console.log('clicked');
      }}
      style={{ zIndex: 1000 }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

HamburgerIcon.defaultProps = {
  active: false
};

export default HamburgerIcon;
