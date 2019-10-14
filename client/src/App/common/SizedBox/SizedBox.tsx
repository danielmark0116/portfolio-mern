import React, { Children } from 'react';

interface IProps {
  children: React.ReactChild;
  size: number;
}

const SizedBox = (props: IProps) => {
  const { children, size } = props;

  return <div style={{ margin: size }}>{children}</div>;
};

SizedBox.defaultProps = {
  size: 40,
  children: ''
};

export default SizedBox;
