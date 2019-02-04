import styled from 'styled-components';

import { styleLibrary } from '../../../constants/style-library';

export const MainSidebar = styled.div.attrs({
  id: 'sidebar'
})`
  background: ${styleLibrary.gradientBg};
  color: ${styleLibrary.lightText};
  flex: 0 0 230px;
  max-width: 230px;
`;

export const HierarchyUnordered = styled.ul`
  padding-left: 10px;
  list-style: none;
  
  ul {
    padding-left: 10px;
    list-style: none;
    display: none;
  }
  
  ul.expanded {
    display: block;
  }
`;
