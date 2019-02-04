import React, { Component } from 'react';

import { MainHeader, LogoContainer } from './styled';

import Logo from '../../../resources/images/arris-logo-login.png';

class Header extends Component {
  render() {
    return (
      <MainHeader>
        <LogoContainer>
          <img src={Logo} alt="ARRIS Network Intelligence"/>
        </LogoContainer>
      </MainHeader>
    );
  }
}

export default Header;
