import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../../modules/header';
import Sidebar from '../../modules/sidebar';

import { styleLibrary } from '../../constants/style-library';

const FlexContainer = styled.div.attrs({
  id: 'wrapper'
})`
  display: flex;
  flex: 1;
  min-height: calc(100vh - 80px);
`;
const MainContainer = styled.div.attrs({
  id: 'main-container'
})`
  background: ${styleLibrary.lightBg};
  color: ${styleLibrary.darkText};
  flex: 1;
  padding: 20px;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Header/>
        <FlexContainer>
          <Sidebar/>
          <MainContainer>
            {children}
          </MainContainer>
        </FlexContainer>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
