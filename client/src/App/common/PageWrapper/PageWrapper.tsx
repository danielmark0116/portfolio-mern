import React, { Fragment } from 'react';

interface IProps {
  children: React.ReactChild;
  withNavbar: Boolean;
}

const PageWrapper = (props: IProps) => {
  const { children, withNavbar } = props;

  return (
    <Fragment>
      {withNavbar ? <h1>NAVBAR</h1> : null}
      {children}
    </Fragment>
  );
};

PageWrapper.defaultProps = {
  withNavbar: true
};

export default PageWrapper;
