import { TweenMax, Power1 } from 'gsap';

const easing = Power1.easeOut;
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

export const animateBgColumns = (
  nodes: Array<HTMLDivElement>,
  e: React.MouseEvent
) => {
  const xTranslation = e.clientX / innerWidth;
  const yTranslation = e.clientY / innerHeight;

  nodes.forEach((node, i) => {
    let animationTime;

    i > 3
      ? TweenMax.set(node, { transformOrigin: 'top center' })
      : TweenMax.set(node, { transformOrigin: 'bottom center' });

    i % 2 === 0 ? (animationTime = 0.8) : (animationTime = 1.7);

    switch (i) {
      case 0:
        TweenMax.to(node, animationTime, {
          scaleY: 0.3 + yTranslation * 0.4,
          ease: easing
        });
        break;
      case 1:
        TweenMax.to(node, animationTime, {
          scaleY: 0.2 + 1 - xTranslation * 0.3,
          ease: easing
        });
        break;
      case 2:
        TweenMax.to(node, animationTime, {
          scaleY: 2 - yTranslation,
          ease: easing
        });
        break;
      case 3:
        TweenMax.to(node, animationTime, {
          scaleY: 2 - xTranslation,
          ease: easing
        });
        break;
      case 4:
        TweenMax.to(node, animationTime, {
          scaleY: 2 - xTranslation,
          ease: easing
        });
        break;
      case 5:
        TweenMax.to(node, animationTime, {
          scaleY: 2 - yTranslation,
          ease: easing
        });
        break;
      case 6:
        TweenMax.to(node, animationTime, {
          scaleY: 0.8 + xTranslation * 0.3,
          ease: easing
        });
        break;
      case 7:
        TweenMax.to(node, animationTime, {
          scaleY: 0.3 + yTranslation * 0.4,
          ease: easing
        });
        break;
      default:
        break;
    }
  });
};
