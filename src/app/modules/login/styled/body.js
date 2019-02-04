import styled from 'styled-components';

export const LoginBody = styled.div.attrs({
})`
  width: 300px;
  margin: 30px auto 50px;
`;

export const LoginError = styled.div.attrs({
  id: 'login-error',
  className: 'row justify-content-center align-items-center'
})`
  color: #D0021B;
  margin: 20px 0 30px;
`;

export const LoginErrorText = styled.div.attrs({
  className: 'text-center'
})`
  padding: 0 20px;
`;

export const LoginButton = styled.button.attrs({
  className: 'btn btn-primary btn-block'
})``;