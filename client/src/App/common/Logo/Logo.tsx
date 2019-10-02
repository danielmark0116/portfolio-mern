import React, { useEffect } from 'react';

import LogoLarge from '../../assets/logo@2x.png';

import { fadeIn as animation } from '../../animations/fades';
import style from '../../styles/main.module.scss';

interface IProps {
  size: 'large' | 'small';
  fadeDelay?: number;
  animate?: Boolean;
}

export default function Logo(props: IProps) {
  const { size } = props;

  const logoRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const { fadeDelay, animate } = props;

    animate && animation(logoRef.current, fadeDelay);
  }, []);

  const logoSize =
    size === 'small'
      ? style.logo_small
      : size === 'large'
      ? style.logo_large
      : '';

  return (
    <div ref={logoRef} className={style.logo}>
      <div className={style.logo_bg}></div>
      <img src={LogoLarge} className={logoSize} alt="" />
    </div>
  );
}

Logo.deafultProps = {
  fadeDelay: 0,
  animate: false
};
