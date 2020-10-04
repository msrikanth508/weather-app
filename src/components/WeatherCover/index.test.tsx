import React from 'react';
import WeatherCover from './index';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const defaultProps = {
  activeWeatherItem: {
    date: new Date('2017-02-16T11:00:00.000Z'),
    id: 1487246400,
    isCloudy: false,
    temp: { max: 15, min: 8, val: 13 },
  },
  cityName: 'Berlin',
};

function getWeatherList(props = defaultProps) {
  return render(
    <ThemeProvider
      theme={{
        space: {},
        colors: {},
      }}
    >
      <WeatherCover {...props} />
    </ThemeProvider>
  );
}
describe('WeatherCover Component', () => {
  it('should render Clear WeatherCover', () => {
    getWeatherList();

    expect(screen.getByText('13'));
    expect(screen.getByText('Clear'));
    expect(screen.getByText('Thursday'));
    expect(screen.getByText('Berlin'));
    expect(screen.getByText('16. February'));
    expect(screen.getByText('8'));
  });

  it('should render Cloudy WeatherCover', () => {
    getWeatherList({
      ...defaultProps,
      activeWeatherItem: {
        ...defaultProps.activeWeatherItem,
        isCloudy: true,
      },
    });

    expect(screen.getByText('13'));
    expect(screen.getByText('Cloudy'));
    expect(screen.getByText('Thursday'));
    expect(screen.getByText('Berlin'));
    expect(screen.getByText('16. February'));
    expect(screen.getByText('15'));
    expect(screen.getByText('8'));
  });
});
