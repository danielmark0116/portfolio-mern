import React from 'react';
import LogoutBox from '../LogoutBox/LogoutBox';
import { NavLink } from 'react-router-dom';

import style from './navbar.module.scss';

interface IProps {
  links: {
    path: string;
    title: string;
  }[];
}

const Navbar = (props: IProps) => {
  const { links } = props;

  return (
    <nav className={style.navbar}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink activeStyle={{ fontWeight: 900 }} exact to={link.path}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <LogoutBox></LogoutBox>
      </div>
    </nav>
  );
};

export default Navbar;
