import { TweenMax, Power1 } from 'gsap';

export const backgroundRedirect = (node: HTMLElement, cb: Function) => {
  const windowHeight = window.innerHeight;

  TweenMax.set(node, {
    transformPerspective: -windowHeight,
    transformOrigin: 'bottom center'
  });

  TweenMax.to(node, 1, {
    y: -windowHeight,
    scale: 0.9,
    rotationX: -40,
    ease: Power1.easeInOut,
    onComplete: () => cb()
  });
};
