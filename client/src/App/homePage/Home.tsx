import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Background from '../common/Background/Background';
import Title from '../common/Title/Title';
import Logo from '../common/Logo/Logo';
import SocialIcons from '../common/SocialIcons/SocialIcons';
import Navbar from '../common/Navbar/Navbar';
import BottomBar from './components/BottomBar.component';

import { pageInBounce } from '../animations/whole_page_in_out';

import style from '../styles/main.module.scss';

interface IState {
  redirectPath: string;
  redirect: Boolean;
  animate: Boolean;
}

class Home extends Component<{}, IState> {
  _isMounted = false;
  nodeRef = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);
    this.state = {
      redirectPath: '',
      redirect: false,
      animate: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const node = this.nodeRef.current;

    pageInBounce(node);
  }

  handleRedirect = (param: string) => {
    this._isMounted &&
      this.setState({
        animate: true,
        redirectPath: param
      });
  };

  callbackFromAnimation = () => {
    this._isMounted &&
      this.setState({
        redirect: true
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { animate, redirect, redirectPath } = this.state;

    return (
      <Fragment>
        {redirect && <Redirect push to={`/${redirectPath}`}></Redirect>}

        <Fragment>
          <div ref={this.nodeRef}>
            <Background callback={this.callbackFromAnimation} animate={animate}>
              <Navbar fluid={true} transparent={true}></Navbar>
              <div>
                <Logo size={'large'}></Logo>
                <Title>Daniel Grychtoł</Title>
                <SocialIcons />
                <BottomBar action={this.handleRedirect} />
              </div>
            </Background>
          </div>
        </Fragment>
      </Fragment>
    );
  }
}

export default Home;
