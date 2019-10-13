import React from 'react';

import PageSecondaryLayout from '../../layout/PageSecondaryLayout';
import AboutComponent from './components/AboutContainer';

const About = () => {
  return (
    <div>
      <PageSecondaryLayout
        goBackBtnText="home"
        pageTitle="about"
        redirectPath="/"
      >
        <AboutComponent></AboutComponent>
      </PageSecondaryLayout>
    </div>
  );
};

export default About;
