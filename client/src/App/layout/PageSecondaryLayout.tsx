import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

import LockedScreen from '../common/LockedScreen/LockedScreen';
import PageContainer from '../common/PageContainer/PageContainer';
import Title from '../common/Title/Title';
import GoBackBtn from '../common/GoBackBtn/GoBackBtn';

import { pageIn, pageOut } from '../animations/whole_page_in_out';

interface IProps {
  children: React.ReactChild;
  goBackBtnText: string;
  pageTitle: string;
  redirectPath: string;
  columns: 1 | 2;
}

interface IState {
  redirect: Boolean;
}

export default class PageSecondaryLayout extends Component<IProps, IState> {
  static defaultProps = {
    goBackBtnText: 'HOME',
    pageTitle: 'TITLE',
    redirectPath: '/',
    columns: 2
  };

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

  oneColumnLayout = () => {
    const { children, pageTitle } = this.props;

    return (
      <PageContainer spaced={true} fluid={false}>
        <Fragment>
          {pageTitle.length > 0 && <Title align="center">{pageTitle}</Title>}
          {children}
        </Fragment>
      </PageContainer>
    );
  };

  twoColumnsLayout = () => {
    const { children, pageTitle } = this.props;

    return (
      <PageContainer spaced={true} fluid={false}>
        <div className="row" style={{ margin: '0' }}>
          <Col lg="4" md="12">
            <Title align="right">{pageTitle}</Title>
          </Col>
          <Col lg="8" md="12" style={{ margin: '0', padding: '0' }}>
            {children}
          </Col>
        </div>
      </PageContainer>
    );
  };

  render() {
    const { redirect } = this.state;
    const {
      children,
      goBackBtnText,
      pageTitle,
      redirectPath,
      columns
    } = this.props;

    return (
      <Fragment>
        {redirect && <Redirect push={true} to={redirectPath} />}
        <GoBackBtn action={this.handleRedirect}>{goBackBtnText}</GoBackBtn>
        <div ref={this.nodeRef}>
          {columns === 2 ? this.twoColumnsLayout() : this.oneColumnLayout()}
        </div>
      </Fragment>
    );
  }
}
