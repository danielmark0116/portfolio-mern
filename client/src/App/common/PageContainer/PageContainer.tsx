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
  fluid?: Boolean;
  spaced: Boolean;
}

const PageContainer = (props: IProps) => {
  const { children, fluid, spaced } = props;
  return (
    <div
      className={`${style.page_container} ${spaced ? style.spaced : ''}`}
      style={fluid ? fluidStyle : maxWidth}
    >
      {children}
    </div>
  );
};

PageContainer.defaultProps = {
  fluid: false,
  spaced: false
};

export default PageContainer;
