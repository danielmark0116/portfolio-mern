import React, { useEffect } from 'react';

import SocialIcon from '../SocialIcon/SocialIcon';

import { fadeIn as animation } from '../../animations/fades';

import style from '../../styles/main.module.scss';

interface IProps {
  animate?: Boolean;
  fadeDelay?: number;
}

export default function SocialIcons(props: IProps) {
  const iconsRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(iconsRef.current, fadeDelay);
  }, []);

  return (
    <div ref={iconsRef} className={style.social_icons_container}>
      <SocialIcon icon="github" index={1} />
      <SocialIcon icon="linkedin" index={2} />
      <SocialIcon icon="instagram" index={3} />
    </div>
  );
}

SocialIcons.defaultProps = {
  animate: false,
  fadeDelay: 0
};
