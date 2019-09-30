import React, { Component } from 'react';

import Background from '../common/Background/Background';
import Title from '../common/Title/Title';
import Logo from '../common/Logo/Logo';
import SocialIcons from '../common/SocialIcons/SocialIcons';

class Home extends Component<{}, {}> {
  render() {
    return (
      <Background>
        <div>
          <Logo size={'large'}></Logo>
          <Title>Daniel Grychtoł</Title>
          <SocialIcons />
        </div>
      </Background>
    );
  }
}

export default Home;
