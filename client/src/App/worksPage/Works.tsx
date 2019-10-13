import React, { Fragment } from 'react';

import PageSecondaryLayout from '../layout/PageSecondaryLayout';
import FlexGrid from '../common/FlexGrid/FlexGrid';
import FlexItem from '../common/FlexGrid/FlexItem';
import PresBox from '../common/PresentationalBox/PresentationalBox';

const Work = () => {
  return (
    <div>
      <PageSecondaryLayout
        goBackBtnText="home"
        pageTitle="my work"
        redirectPath="/"
        columns={1}
      >
        <FlexGrid>
          <Fragment>
            <FlexItem itemsPerRow={3}>
              <PresBox index={1}></PresBox>
            </FlexItem>
            <FlexItem itemsPerRow={3}>
              <PresBox index={2}></PresBox>
            </FlexItem>
            <FlexItem itemsPerRow={3}>
              <PresBox index={3}></PresBox>
            </FlexItem>
            <FlexItem itemsPerRow={3}>
              <PresBox index={4}></PresBox>
            </FlexItem>
          </Fragment>
        </FlexGrid>
      </PageSecondaryLayout>
    </div>
  );
};

export default Work;
