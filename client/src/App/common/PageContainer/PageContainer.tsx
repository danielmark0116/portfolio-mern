import React from 'react';

import style from './page_container.module.scss';

const maxWidth = {
  maxWidth: 1200
};

const fluidStyle = {
  maxWidth: '100%'
};

interface IProps {
  children: React.ReactChild;
  fluid: Boolean;
}

const PageContainer = (props: IProps) => {
  const { children, fluid } = props;
  return (
    <div className={style.page_container} style={fluid ? fluidStyle : maxWidth}>
      {children}
    </div>
  );
};

PageContainer.defaultProps = {
  fluid: false
};

export default PageContainer;
