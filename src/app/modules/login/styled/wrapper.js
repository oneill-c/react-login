import styled from 'styled-components';
import { styleLibrary } from '../../../constants/style-library';

export const LoginWrapper = styled.div.attrs({
  className: 'container'
})`
  width: 600px;
  max-width: 90%;
  background-color: #FFF;
  border: 1px solid ${styleLibrary.darkText};
`;

export const Copyright = styled.div.attrs({
  className: 'text-center'
})`
  margin: 10px 0;
  font-size: 13px;
  
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;
