import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: React.ReactChild;
}

const LockedScreen = (props: IProps) => {
  const { children } = props;
  return <div className={style.locked_component}>{children}</div>;
};

export default LockedScreen;
