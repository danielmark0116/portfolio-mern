import * as React from 'react';
import SVG from 'react-inlinesvg';
import { useEffect } from 'react';

import InstagramIcon from '../../assets/instagram.svg';
import GitHubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';

import { btnHover, btnReset } from '../../animations/social_icon_hover';
import { btnReveal } from '../../animations/social_icons_reveal';

import style from '../../styles/main.module.scss';

interface IProps {
  icon: 'instagram' | 'linkedin' | 'github';
  index: number;
  action: Function;
}

export default function SocialIcon(props: IProps) {
  const { icon, index, action } = props;

  const iconRef = React.createRef<any>();
  const iconBgRef = React.createRef<any>();

  useEffect(() => {
    btnReveal(iconRef.current, 1.7, index);
  }, []);

  let iconToDisplay = '';

  switch (icon) {
    case 'instagram':
      iconToDisplay = InstagramIcon;
      break;
    case 'github':
      iconToDisplay = GitHubIcon;
      break;
    case 'linkedin':
      iconToDisplay = LinkedInIcon;
      break;
    default:
      break;
  }

  return (
    <div
      ref={iconRef}
      onClick={() => action()}
      className={style.social_icon}
      onMouseEnter={() => {
        btnHover(iconRef.current, iconBgRef.current);
      }}
      onMouseLeave={() => {
        btnReset(iconRef.current, iconBgRef.current);
      }}
    >
      <SVG src={iconToDisplay} />
      <div className={style.social_icon_bg} ref={iconBgRef} />
    </div>
  );
}

SocialIcon.defaultProps = {
  index: 1,
  action: () => null
};
