import { TimelineMax, Back } from 'gsap';

const animationTime = 0.7;
const easing = Back.easeOut.config(3);
const bg = 'white';
const color = 'black';

export const switchBtnBackground = (node: any, pageOffset: number) => {
  const t1 = new TimelineMax();

  if (pageOffset > 50) {
    t1.to(node, animationTime, {
      boxShadow: '0 5px 4px #efefef',
      background: bg,
      scale: 1.05,
      y: 20,
      color: color,
      ease: easing
    });
  } else {
    t1.to(node, animationTime * 0.5, {
      boxShadow: 'none',
      y: 0,
      scale: 1,
      background: 'transparent',
      ease: easing
    });
  }
};
