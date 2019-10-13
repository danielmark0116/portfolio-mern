import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import PageSecondaryLayout from '../../layout/PageSecondaryLayout';
import WorkContainer from './components/WorkContainer';

import { pageIn } from '../../animations/presentational_box_transition';

import style from '../../styles/main.module.scss';

interface RouteProps {
  id: string;
}

type Props = RouteComponentProps<RouteProps>;

const Work = (props: Props) => {
  const node = React.createRef<HTMLDivElement>();

  useEffect(() => {
    pageIn(node.current);
  }, []);

  return (
    <div>
      <div ref={node} className={style.transition_box}></div>
      <PageSecondaryLayout
        goBackBtnText="back"
        pageTitle=""
        redirectPath="/work"
        columns={1}
      >
        <div>
          <WorkContainer id={props.match.params.id}></WorkContainer>
        </div>
      </PageSecondaryLayout>
    </div>
  );
};

export default withRouter(Work);
