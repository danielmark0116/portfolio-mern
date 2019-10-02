import { TweenMax, Back, Power1 } from 'gsap';

const fadeTime = 1;
const yValue = 10;
const easing = Power1.easeOut;
const bounceEasing = Back.easeOut.config(2);
const deltaDelay = 0.3;

export const fadeIn = (node: any, index: number = 0) => {
  TweenMax.from(node, fadeTime, { opacity: 0, ease: easing }).delay(
    deltaDelay * index
  );
};

export const fadeOut = (node: any, index: number = 0) => {
  TweenMax.to(node, fadeTime, { opacity: 0, ease: easing }).delay(
    deltaDelay * index
  );
};

export const fadeInDown = (node: any, index: number = 0) => {
  TweenMax.from(node, fadeTime, { opacity: 0, y: yValue, ease: easing }).delay(
    deltaDelay * index
  );
};

export const fadeInUp = (node: any, index: number = 0) => {
  TweenMax.from(node, fadeTime, { opacity: 0, y: -yValue, ease: easing }).delay(
    deltaDelay * index
  );
};

export const fadeInDownBounce = (node: any, index: number = 0) => {
  TweenMax.from(node, fadeTime, {
    opacity: 0,
    y: yValue,
    ease: bounceEasing
  }).delay(deltaDelay * index);
};

export const fadeInUpBounce = (node: any, index: number = 0) => {
  TweenMax.from(node, fadeTime, {
    opacity: 0,
    y: -yValue,
    ease: bounceEasing
  }).delay(deltaDelay * index);
};
