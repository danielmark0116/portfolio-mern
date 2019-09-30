import { TweenMax } from 'gsap';
import { Back } from 'gsap';

const animationDuration = 0.4;
const easing = Back.easeOut.config(4);

export const btnHover = (icon: HTMLDivElement, iconBg: HTMLDivElement) => {
  TweenMax.set(iconBg, { transformOrigin: 'top left', rotation: -20 });

  TweenMax.to(icon, animationDuration, {
    scale: 1.1,
    y: -2,
    ease: easing
  });
  TweenMax.to(iconBg, animationDuration, {
    rotation: 0,
    y: 5,
    opacity: 1,
    ease: easing
  });
};

export const btnReset = (icon: HTMLDivElement, iconBg: HTMLDivElement) => {
  TweenMax.to(icon, animationDuration, { scale: 1, y: 0, ease: easing });
  TweenMax.to(iconBg, animationDuration, {
    rotation: -20,
    y: 0,
    opacity: 0,
    ease: easing
  });
};
