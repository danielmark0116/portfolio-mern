import React, { Component, Fragment } from 'react';

import Background from '../common/Background/Background';
import Title from '../common/Title/Title';
import Logo from '../common/Logo/Logo';
import SocialIcons from '../common/SocialIcons/SocialIcons';
import Navbar from '../common/Navbar/Navbar';
import BottomBar from './components/BottomBar.component';

class Home extends Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <Background>
          <Navbar fluid={true} transparent={true}></Navbar>
          <div>
            <Logo size={'large'}></Logo>
            <Title>Daniel Grychtoł</Title>
            <SocialIcons />
            <BottomBar />
          </div>
        </Background>
        <br />
        <h2>sdf</h2>
      </Fragment>
    );
  }
}

export default Home;
