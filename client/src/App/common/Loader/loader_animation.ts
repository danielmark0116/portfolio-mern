import { TimelineMax, TweenMax, Power1 } from 'gsap';

// let initRotate = 0;
const delayTime = 0.2;
const animationTime = 1.25;
const rotationTime = animationTime * 2;
const rotationEasing = Power1.easeInOut;

export const loaderAnimation = (nodes: any[], masterNode: any) => {
  nodes.forEach((node, index) => {
    const t = new TimelineMax().repeat(-1).yoyo(true);
    t.from(node, animationTime, { opacity: 0, scale: 0, ease: Power1.easeOut });
    t.play().delay(delayTime * index);
  });

  const rotateDelay = (delayTime * nodes.length + animationTime) / 2;

  const t2 = new TimelineMax()
    .repeat(-1)
    .yoyo(true)
    .repeatDelay(rotateDelay);

  t2.to(masterNode, rotationTime, {
    rotation: 90,
    ease: rotationEasing
  })
    .to(masterNode, rotationTime, {
      rotation: 180,
      ease: rotationEasing
    })
    .to(masterNode, rotationTime, {
      rotation: 270,
      ease: rotationEasing
    })
    .to(masterNode, rotationTime, {
      rotation: 360,
      ease: rotationEasing
    })
    .delay(rotateDelay);
};
