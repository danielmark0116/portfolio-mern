import React, { Fragment, useEffect } from 'react';

import { fadeInDown as animation } from '../animations/fades';

import Navbar from '../common/Navbar/Navbar';

interface IProps {
  children: React.ReactChild;
  withNavbar: Boolean;
}

const PageWrapper = (props: IProps) => {
  const { children, withNavbar } = props;
  const contentRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    animation(contentRef.current, 1.5);
  }, []);

  return (
    <Fragment>
      {withNavbar ? <Navbar fixed={true} fluid={true}></Navbar> : null}
      <div style={{ marginTop: 140 }}></div>
      <div ref={contentRef} style={{ padding: '0 30px' }}>
        {children}
      </div>
    </Fragment>
  );
};

PageWrapper.defaultProps = {
  withNavbar: true
};

export default PageWrapper;
