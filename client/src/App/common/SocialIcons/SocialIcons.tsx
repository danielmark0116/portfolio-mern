import React, { useEffect } from "react";

import SocialIcon from "../SocialIcon/SocialIcon";

import { stateToProps } from "./SocialIconsContainer";

import { fadeIn as animation } from "../../animations/fades";

import style from "../../styles/main.module.scss";

interface IProps {
  animate?: Boolean;
  fadeDelay?: number;
}

type Props = IProps & stateToProps;

export default function SocialIcons(props: Props) {
  const iconsRef = React.createRef<HTMLDivElement>();

  const { links } = props;

  useEffect(() => {
    const { animate, fadeDelay } = props;

    animate && animation(iconsRef.current, fadeDelay);
  }, []);

  return (
    <div ref={iconsRef} className={style.social_icons_container}>
      <SocialIcon
        icon="github"
        index={1}
        action={() => window.open(links.githubLink, "_blank")}
      />
      <SocialIcon
        icon="linkedin"
        index={2}
        action={() => window.open(links.linkedInLink, "_blank")}
      />
      <SocialIcon
        icon="instagram"
        index={3}
        action={() => window.open(links.instagramLink, "_blank")}
      />
    </div>
  );
}

SocialIcons.defaultProps = {
  animate: false,
  fadeDelay: 0
};
