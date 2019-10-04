import React from 'react';

import PageSecondaryLayout from '../layout/PageSecondaryLayout';

const About = () => {
  return (
    <div>
      <PageSecondaryLayout
        goBackBtnText="home"
        pageTitle="about"
        redirectPath="/"
      >
        <div>test</div>
      </PageSecondaryLayout>
    </div>
  );
};

export default About;
