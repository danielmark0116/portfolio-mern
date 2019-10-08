import React from 'react';

import style from './flex_center.module.scss';

interface IProps {
  children: React.ReactChild;
  direction?: 'row' | 'column';
}

const FlexCenter = (props: IProps) => {
  const { children, direction } = props;
  return (
    <div className={style.flex_center} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};

FlexCenter.defaultProps = {
  direction: 'row'
};

export default FlexCenter;
