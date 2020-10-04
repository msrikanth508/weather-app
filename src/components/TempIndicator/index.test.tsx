import React from 'react';
import TempIndicator from './index';
import { screen, render } from '@testing-library/react';

describe('TempIndicator Component', () => {
  it('should render TempIndicator', () => {
    render(<TempIndicator value="13°" />);

    expect(screen.getByText('13°'));
  });
});
