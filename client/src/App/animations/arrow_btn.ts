import { TimelineMax, Power1 } from 'gsap';

export const arrowBtnAnimation = (
  node1: any,
  node2: any,
  index: number = 0
) => {
  const arrow1 = new TimelineMax();
  const arrow2 = new TimelineMax();

  const yValue = 5;
  const animationTime = 1;
  const pauseTime = 2;

  arrow1
    .from(node1, animationTime, { opacity: 0, y: yValue, ease: Power1.easeIn })
    .to(node1, pauseTime, {})
    .to(node1, animationTime, { opacity: 0, y: -yValue, ease: Power1.easeOut });

  arrow2
    .from(node2, animationTime, { opacity: 0, y: yValue, ease: Power1.easeIn })
    .to(node2, pauseTime, {})
    .to(node2, animationTime, { opacity: 0, y: -yValue, ease: Power1.easeOut })
    .delay(0.2);

  arrow1.repeat(-1);
  arrow2.repeat(-1);
};
