import styled from 'styled-components';

import { styleLibrary } from '../../../constants/style-library';

export const MainHeader = styled.header.attrs({
  className: 'row no-gutters align-items-center'
})`
  background: ${styleLibrary.gradientBg};
  color: ${styleLibrary.lightText};
  height: 80px;
`;

export const LogoContainer = styled.div.attrs({
  className: 'text-center'
})`
  width: 230px;
`;
