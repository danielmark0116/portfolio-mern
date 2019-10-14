import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: React.ReactChild | React.ReactChild[];
}

const FlexGrid = (props: IProps) => {
  const { children } = props;
  return <div className={style.flex_grid}>{children}</div>;
};

export default FlexGrid;
