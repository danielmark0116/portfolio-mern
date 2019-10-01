import React, { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';

interface IProps {
  children: React.ReactChild;
  withNavbar: Boolean;
}

const PageWrapper = (props: IProps) => {
  const { children, withNavbar } = props;

  return (
    <Fragment>
      {withNavbar ? <Navbar fixed={true} fluid={true}></Navbar> : null}
      <div style={{ marginTop: 140 }}></div>
      <div style={{ padding: '0 30px' }}>{children}</div>
    </Fragment>
  );
};

PageWrapper.defaultProps = {
  withNavbar: true
};

export default PageWrapper;
