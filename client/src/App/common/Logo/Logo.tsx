import * as React from 'react';

import LogoLarge from '../../assets/logo@2x.png';

import style from '../../styles/main.module.scss';

interface IProps {
  size: 'large' | 'small';
}

export default function Logo(props: IProps) {
  const { size } = props;

  const logoSize =
    size === 'small'
      ? style.logo_small
      : size === 'large'
      ? style.logo_large
      : '';

  return (
    <div className={style.logo}>
      <div className={style.logo_bg}></div>
      <img src={LogoLarge} className={logoSize} alt="" />
    </div>
  );
}
