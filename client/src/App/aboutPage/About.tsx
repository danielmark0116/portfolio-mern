import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

import PageContainer from '../common/PageContainer/PageContainer';
import Title from '../common/Title/Title';
import GoBackBtn from '../common/GoBackBtn/GoBackBtn';

import { pageIn, pageOut } from '../animations/whole_page_in_out';

interface IProps {}

interface IState {
  redirect: Boolean;
}

export default class About extends Component<IProps, IState> {
  nodeRef = React.createRef<HTMLDivElement>();

  constructor(props: IProps) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    const node = this.nodeRef.current;
    pageIn(node);
  }

  handleRedirect = () => {
    const node = this.nodeRef.current;

    pageOut(node, () => {
      this.setState({
        redirect: true
      });
    });
  };

  render() {
    const { redirect } = this.state;

    return (
      <Fragment>
        {redirect && <Redirect push={true} to="/" />}
        <GoBackBtn action={this.handleRedirect}>HOME</GoBackBtn>
        <div ref={this.nodeRef}>
          <PageContainer spaced={true} fluid={false}>
            <div className="row" style={{ margin: '0' }}>
              <Col lg="4" md="12">
                <Title align="right">About</Title>
              </Col>
              <Col lg="8" md="12">
                rest
              </Col>
            </div>
          </PageContainer>
        </div>
      </Fragment>
    );
  }
}
