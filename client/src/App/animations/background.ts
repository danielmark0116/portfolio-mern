import { TweenMax } from 'gsap';

export const backgroundMoveAnimation = (
  e: React.MouseEvent<HTMLElement>,
  node: HTMLElement
) => {
  TweenMax.set(node, {
    transformPerspective: 400,
    transformOrigin: 'center center'
  });
  const windowXCenter: number = window.innerWidth / 2;
  const mouseXPosition: number = e.clientX;
  const xTranslationValue: number = (windowXCenter - mouseXPosition) * 0.0005;

  const windowYCenter: number = window.innerHeight / 2;
  const mouseYPosition: number = e.clientY;
  const yTranslationValue: number = (windowYCenter - mouseYPosition) * -0.001;

  TweenMax.to(node, 0.5, {
    rotationY: xTranslationValue,
    rotationX: yTranslationValue
  });
};
