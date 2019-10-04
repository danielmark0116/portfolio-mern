import React, { Fragment } from 'react';

import PageSecondaryLayout from '../layout/PageSecondaryLayout';
import FlexGrid from '../common/FlexGrid/FlexGrid';
import FlexItem from '../common/FlexGrid/FlexItem';

const Work = () => {
  return (
    <div>
      <PageSecondaryLayout
        goBackBtnText="home"
        pageTitle="my work"
        redirectPath="/"
      >
        <FlexGrid>
          <Fragment>
            <FlexItem>test</FlexItem>
            <FlexItem>test</FlexItem>
            <FlexItem>test</FlexItem>
            <FlexItem>test</FlexItem>
          </Fragment>
        </FlexGrid>
      </PageSecondaryLayout>
    </div>
  );
};

export default Work;
