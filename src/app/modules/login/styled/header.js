import styled from 'styled-components';
import { styleLibrary } from '../../../constants/style-library';

export const LoginHeader = styled.div.attrs({
  className: 'row align-items-center'
})`
  background: ${styleLibrary.gradientBg};
`;

export const Logo = styled.div.attrs({
  id: 'login-logo',
  className: 'col'
})`
`;

export const LogoImg = styled.img`
  width: 125px;
  margin: 10px 0;
`;

export const HeaderText = styled.div.attrs({
  id: 'login-header-text',
  className: 'col text-right'
})`
  color: ${styleLibrary.lightText};
  font-size: ${styleLibrary.titleFontSize};
  font-weight: bold;
  
  @media (max-width: 767px) {
    font-size: ${styleLibrary.mobileTitleFontSize}
  }
`;
