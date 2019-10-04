import React, { Fragment, useEffect } from 'react';

import PageSecondaryLayout from '../layout/PageSecondaryLayout';
import FlexGrid from '../common/FlexGrid/FlexGrid';
import FlexItem from '../common/FlexGrid/FlexItem';
import PresBox from '../common/PresentationalBox/PresentationalBox';

import { pageIn } from '../animations/presentational_box_transition';

import style from '../styles/main.module.scss';

const Work = () => {
  const node = React.createRef<HTMLDivElement>();

  useEffect(() => {
    pageIn(node.current);
  }, []);

  return (
    <div>
      <div ref={node} className={style.transition_box}></div>
      <PageSecondaryLayout
        goBackBtnText="back"
        pageTitle="my work"
        redirectPath="/work"
      >
        <FlexGrid>
          <Fragment>
            <FlexItem>podstorna</FlexItem>
          </Fragment>
        </FlexGrid>
      </PageSecondaryLayout>
    </div>
  );
};

export default Work;
