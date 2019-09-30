import { TweenMax } from 'gsap';

export const animation = (node: any) => {
  TweenMax.to(node, 1, { y: 40 });
};
