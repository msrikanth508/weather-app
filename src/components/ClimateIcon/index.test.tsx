import React from 'react';
import ClimateIcon from './index';
import { screen, render } from '@testing-library/react';

describe('ClimateIcon Component', () => {
  it('should render cloud icon', () => {
    render(<ClimateIcon isCloudy />);

    expect(screen.getByTestId('cloud'));
  });

  it('should render sun icon', () => {
    render(<ClimateIcon isCloudy={false} />);

    expect(screen.getByTestId('sun'));
  });
});
