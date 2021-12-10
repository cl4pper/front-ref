import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// COMPONENTS
import Title from './component';

let component;

describe('Footer', () => {
  beforeAll(() => {
    component = props => <Title {...props} />;
  });

  it('should render each link', () => {
    const { getByText } = render(component());

    expect(getByText('Template component').textContent).toBeTruthy();
  });
});