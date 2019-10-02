import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Background from '../common/Background/Background';
import Title from '../common/Title/Title';
import Logo from '../common/Logo/Logo';
import SocialIcons from '../common/SocialIcons/SocialIcons';
import Navbar from '../common/Navbar/Navbar';
import BottomBar from './components/BottomBar.component';

import { pageInBounce } from '../animations/whole_page_in_out';

interface IState {
  redirectPath: string;
  redirect: Boolean;
  animate: Boolean;
  backgroundAnimation: Boolean;
}

class Home extends Component<{}, IState> {
  _isMounted = false;
  nodeRef = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);
    this.state = {
      redirectPath: '',
      redirect: false,
      animate: false,
      backgroundAnimation: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const node = this.nodeRef.current;

    pageInBounce(node, () => {
      this.setState({
        backgroundAnimation: true
      });
    });
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
    const { animate, redirect, redirectPath, backgroundAnimation } = this.state;

    return (
      <Fragment>
        {redirect && <Redirect push to={`/${redirectPath}`}></Redirect>}

        <Fragment>
          <div ref={this.nodeRef}>
            <Background
              animationToggle={backgroundAnimation}
              callback={this.callbackFromAnimation}
              animate={animate}
            >
              <Navbar fluid={true} transparent={true}></Navbar>
              <div>
                <Logo animate={true} fadeDelay={0.5} size={'large'}></Logo>
                <Title animate={true} fadeDelay={1.5}>
                  Daniel Grychtoł
                </Title>
                <SocialIcons animate={true} fadeDelay={2.5} />
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
