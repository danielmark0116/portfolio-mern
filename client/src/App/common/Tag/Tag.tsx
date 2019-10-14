import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: React.ReactChild;
}

const Tag = (props: IProps) => {
  const { children } = props;

  return <div className={style.tag_box}>{children}</div>;
};

export default Tag;
