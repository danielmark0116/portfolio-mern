import React from 'react';
import { Row, Col } from 'reactstrap';

import BottomBarContainer from '../../common/BottomBar/BottomBar';
import Link from '../../common/Link/Link';
import FlexCenter from '../../common/FlexCenter/FlexCenter';

import 'bootstrap/dist/css/bootstrap-grid.css';

const BottomBar = () => {
  return (
    <div>
      <BottomBarContainer>
        <Row>
          <Col>
            <FlexCenter>
              <Link active={false} size="large">
                work
              </Link>
            </FlexCenter>
          </Col>
          <Col>
            <FlexCenter>
              <Link active={false} size="large">
                about
              </Link>
            </FlexCenter>
          </Col>
        </Row>
      </BottomBarContainer>
    </div>
  );
};

export default BottomBar;
