import React, { Fragment } from 'react';

import PageSecondaryLayout from '../../layout/PageSecondaryLayout';
import FlexGrid from '../../common/FlexGrid/FlexGrid';
import FlexItem from '../../common/FlexGrid/FlexItem';
import PresBox from '../../common/PresentationalBox/PresentationalBox';

import WorksContainer from './components/WorksContainer';

const Works = () => {
  return (
    <div>
      <PageSecondaryLayout
        goBackBtnText="home"
        pageTitle="my work"
        redirectPath="/"
        columns={1}
      >
        <FlexGrid>
          <WorksContainer></WorksContainer>
        </FlexGrid>
      </PageSecondaryLayout>
    </div>
  );
};

export default Works;
