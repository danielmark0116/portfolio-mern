import { TweenMax, Power1, Back } from 'gsap';

export const pageIn = (node: any) => {
  TweenMax.from(node, 1, {
    y: 100,
    opacity: 0,
    ease: Power1.easeOut
  });
};

export const pageOut = (node: any, cb: Function) => {
  TweenMax.to(node, 0.5, {
    y: 200,
    opacity: 0,
    ease: Power1.easeIn,
    onComplete: () => cb()
  });
};

export const pageInBounce = (node: any, cb: Function) => {
  TweenMax.from(node, 1.5, {
    y: -300,
    opacity: 0,
    ease: Back.easeOut.config(1),
    onComplete: () => cb()
  });
};
