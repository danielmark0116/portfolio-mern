import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import style from '../../styles/main.module.scss';

import PageContainer from '../PageContainer/PageContainer';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

interface IProps {
  fluid: Boolean;
  fixed: Boolean;
  transparent: Boolean;
}

interface IPropsLinks {
  toggled: Boolean;
  display: 'flex' | 'block';
}

const activeLink = {
  fontWeight: 900
};

const Links = (props: IPropsLinks) => (
  <ul style={props.toggled ? { display: props.display } : { display: 'none' }}>
    <li>
      <NavLink exact activeStyle={activeLink} to="/">
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={activeLink} to="/contact">
        CONTACT
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={activeLink} to="/admin">
        ADMIN PANEL
      </NavLink>
    </li>
  </ul>
);

const Navbar = (props: IProps) => {
  const { fluid, fixed, transparent } = props;
  const [toggleValue, toggle] = useState(false);

  return (
    <nav
      className={`${style.navbar} ${fixed ? style.fixed : null}`}
      style={transparent ? { background: 'transparent' } : {}}
    >
      <PageContainer fluid={fluid ? true : false}>
        <Fragment>
          <div className={style.desktop_menu}>
            <Links toggled={true} display={'flex'}></Links>
          </div>
          <div className={style.mobile_menu}>
            <HamburgerIcon
              active={toggleValue}
              clickAction={() => toggle(!toggleValue)}
            ></HamburgerIcon>
            <Links toggled={toggleValue} display={'block'}></Links>
          </div>
        </Fragment>
      </PageContainer>
    </nav>
  );
};

Navbar.defaultProps = {
  fluid: false,
  fixed: false,
  transparent: false
};

export default Navbar;
