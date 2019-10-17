import React, { useEffect } from 'react';

import { loaderAnimation } from './loader_animation';

import style from './loader.module.scss';

const Loader = () => {
  const ref1 = React.createRef<HTMLDivElement>();
  const ref2 = React.createRef<HTMLDivElement>();
  const ref3 = React.createRef<HTMLDivElement>();
  const ref4 = React.createRef<HTMLDivElement>();
  const loaderContainer = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const node1 = ref1.current;
    const node2 = ref2.current;
    const node3 = ref3.current;
    const node4 = ref4.current;
    const loaderContainerRef = loaderContainer.current;

    loaderAnimation([node2, node4, node3, node1], loaderContainerRef);
  }, ['']);

  return (
    <div className={style.loader_container} ref={loaderContainer}>
      <div ref={ref1}></div>
      <div ref={ref2}></div>
      <div ref={ref3}></div>
      <div ref={ref4}></div>
    </div>
  );
};

export default Loader;
