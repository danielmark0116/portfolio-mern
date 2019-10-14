import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: React.ReactChild;
  title: string;
}

const Point = (props: IProps) => {
  const { title, children } = props;

  return (
    <div className={style.point_container}>
      <div className={style.point}></div>
      <div className={style.point_title}>{title}:</div>
      {children}
    </div>
  );
};

Point.defaultProps = {
  children: '',
  title: ''
};

export default Point;
