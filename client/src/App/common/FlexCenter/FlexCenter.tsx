import React from 'react';

interface IProps {
  children: React.ReactChild;
}

const customStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const FlexCenter = (props: IProps) => {
  const { children } = props;
  return <div style={customStyle}>{children}</div>;
};

export default FlexCenter;
