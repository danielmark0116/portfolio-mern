import React from 'react';

interface IProps {
  children: React.ReactChild;
}

const styles = {
  margin: '40px auto 0',
  width: '100%',
  maxWidth: 1000
};

const PageContainer = (props: IProps) => {
  const { children } = props;

  return <div style={styles}>{children}</div>;
};

export default PageContainer;
