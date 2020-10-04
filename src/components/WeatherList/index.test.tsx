import React from 'react';
import WeatherList from './index';
import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const defaultProps = {
  data: [
    {
      date: new Date('2017-02-16T11:00:00.000Z'),
      id: 1487246400,
      isCloudy: false,
      temp: { max: 13, min: 8, val: 13 },
    },
  ],
  onSelect: () => ({}),
  activeWeatherId: null,
};

function getWeatherList(props = defaultProps) {
  return render(
    <ThemeProvider
      theme={{
        space: {},
        colors: {},
      }}
    >
      <WeatherList {...props} />
    </ThemeProvider>
  );
}
describe('WeatherList Component', () => {
  it('should render WeatherCover', () => {
    getWeatherList();

    expect(screen.getByText('13'));
    expect(screen.getByText('12:00'));
  });

  it('should call onClick fn', () => {
    const mockFn = jest.fn();
    getWeatherList({
      ...defaultProps,
      onSelect: mockFn,
    });

    expect(screen.getByText('12:00'));
    fireEvent.click(screen.getByText('12:00'));

    expect(mockFn).toBeCalledWith({
      date: new Date('2017-02-16T11:00:00.000Z'),
      id: 1487246400,
      isCloudy: false,
      temp: { max: 13, min: 8, val: 13 },
    });
  });
});
