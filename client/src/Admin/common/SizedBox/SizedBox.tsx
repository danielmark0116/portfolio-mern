import React from 'react';

interface IProps {
  space: number;
}

const SizedBox = (props: IProps) => {
  const { space } = props;

  return <div style={{ margin: space }}></div>;
};

SizedBox.defaultProps = {
  space: 80
};

export default SizedBox;
