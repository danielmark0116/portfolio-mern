import { TweenMax, Power1, Back, TimelineMax } from 'gsap';

const hoverAniTime = 0.9;
const hoverEasing = Back.easeOut.config(1);
const picEasing = Back.easeOut.config(1);
const hoverRotation = 30;
const transitionTime = 0.5;

export const pageOut = (
  hoverNode: any,
  boxNode: any,
  nodeMobile: any,
  picNode: any,
  cb: Function
) => {
  TweenMax.set(boxNode, {
    overflow: 'visible',
    zIndex: '104'
  });

  TweenMax.set(nodeMobile, {
    overflow: 'visible',
    zIndex: '105',
    scale: 0
  });

  TweenMax.to(picNode, transitionTime, {
    scale: 0,
    ease: Back.easeIn.config(2)
  });

  TweenMax.to(hoverNode, transitionTime, {
    scale: 15,
    y: 1000,
    ease: Power1.easeIn,
    onComplete: () => cb()
  });

  TweenMax.to(nodeMobile, transitionTime, {
    scale: 20,
    opacity: 1,
    ease: Power1.easeOut
  });
};

export const pageIn = (node: any) => {
  const t1 = new TimelineMax();

  t1.to(node, 1, {
    y: -600,
    scale: 0,
    opacity: 0,
    ease: Back.easeIn.config(1)
  }).to(node, 0.5, {
    opacity: 0,
    zIndex: -1
  });
};

export const hover = (hoverNode: any, picNode: any) => {
  configureNodes(hoverNode, picNode);

  TweenMax.to(hoverNode, hoverAniTime, {
    y: 250,
    rotationX: 0,
    scale: 1,
    opacity: 1,
    ease: hoverEasing
  });

  TweenMax.to(picNode, hoverAniTime, {
    scale: 0.3,
    ease: picEasing,
    rotationX: hoverRotation,
    opacity: 0
  });
};

export const endHover = (hoverNode: any, picNode: any) => {
  TweenMax.to(hoverNode, hoverAniTime, {
    y: -50,
    rotationX: hoverRotation,
    scale: 0.5,
    opacity: 1,
    ease: hoverEasing
  });

  TweenMax.to(picNode, hoverAniTime, {
    scale: 1,
    ease: picEasing,
    rotationX: 0,
    opacity: 1
  });
};

function configureNodes(hoverNode: any, picNode: any) {
  TweenMax.set(picNode, {
    transformOrigin: 'top center',
    transformPerspective: 400,
    zIndex: 1
  });
  TweenMax.set(hoverNode, {
    transformOrigin: 'bottom center',
    transformPerspective: 400,
    zIndex: 2,
    rotationX: hoverRotation,
    scale: 0.5,
    opacity: 1
  });
}
