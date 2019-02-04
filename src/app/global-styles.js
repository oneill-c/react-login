import { createGlobalStyle } from 'styled-components';
import { styleLibrary } from './constants/style-library';

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, h4, h5 {
    font-family: "Open Sans", sans-serif;
  }
    
  * {
    border-radius: 0 !important;
  }
    
  code {
    font-family: "Courier New", monospace;
  }
  
  .main-body {
    background: ${styleLibrary.gradientBg};
    color: ${styleLibrary.lightText};
  }
  
  .main-body.no-background {
    background: ${styleLibrary.lightBg};
    color: ${styleLibrary.darkText};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
  }
  
  .btn {
    border: 0;
    font-weight: bold;
  }
  
  .btn-primary {
    background-color: ${styleLibrary.primaryButtonBg} !important;
  }
`;

export default GlobalStyles;
