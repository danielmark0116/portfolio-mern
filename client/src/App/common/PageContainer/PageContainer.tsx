import React from 'react';

import style from './page_container.module.scss';

const maxWidth = {
  maxWidth: 1000
};

interface IProps {
  children: React.ReactChild;
}

const PageContainer = (props: IProps) => {
  const { children } = props;
  return (
    <div className={style.page_container} style={maxWidth}>
      {children}
    </div>
  );
};

export default PageContainer;
