import React from 'react';
import { Row, Col } from 'reactstrap';

import BottomBarContainer from '../../common/BottomBar/BottomBar';
import Link from '../../common/Link/Link';
import FlexCenter from '../../common/FlexCenter/FlexCenter';

import 'bootstrap/dist/css/bootstrap-grid.css';

interface IProps {
  action: Function;
}

const BottomBar = (props: IProps) => {
  return (
    <div>
      <BottomBarContainer>
        <Row>
          <Col>
            <FlexCenter>
              <Link
                action={() => props.action('work')}
                active={false}
                size="large"
              >
                work
              </Link>
            </FlexCenter>
          </Col>
          <Col>
            <FlexCenter>
              <Link
                action={() => props.action('about')}
                active={false}
                size="large"
              >
                about
              </Link>
            </FlexCenter>
          </Col>
        </Row>
      </BottomBarContainer>
    </div>
  );
};

BottomBar.defaultProps = {
  action: () => null
};

export default BottomBar;
