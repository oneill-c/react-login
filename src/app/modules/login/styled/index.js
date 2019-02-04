/**
 * This class acts as a proxy to all the styled components under this module. The intention to allow the
 * individual parts of the component to be split into sensible pieces but to be available as a single
 * import at the rendering layer itself.
 */
import { LoginWrapper, Copyright } from './wrapper';
import { LoginHeader, Logo, LogoImg, HeaderText, } from './header';
import { LoginBody, LoginError, LoginErrorText, LoginButton } from './body';

export {
  LoginWrapper,
  LoginHeader,
  Logo,
  LogoImg,
  HeaderText,
  LoginBody,
  LoginError,
  LoginErrorText,
  LoginButton,
  Copyright
};