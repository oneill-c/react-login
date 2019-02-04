import React from 'react';
import { shallow } from 'enzyme';

export const renderComponent = (Component, mockProps) => (
  shallow(<Component {...mockProps} />)
);