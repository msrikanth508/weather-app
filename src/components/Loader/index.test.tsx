import React from 'react';
import Loader from './index';
import { screen, render } from '@testing-library/react';

describe('Loader Component', () => {
  it('should render Loader', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader'));
  });
});
