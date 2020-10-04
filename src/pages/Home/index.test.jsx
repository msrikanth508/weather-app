import React from 'react';
import Home from './index';
import { screen, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { fetchWeatherData } from '../../api';

jest.mock('../../api');

const mockFetch = (fn) => {
  fetchWeatherData.mockImplementation(fn);
};

function getHomePage() {
  return render(
    <ThemeProvider
      theme={{
        space: {},
        colors: {},
      }}
    >
      <Home />
    </ThemeProvider>
  );
}

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render WeatherCover', async () => {
    const mockFn = jest.fn(() =>
      Promise.resolve([
        {
          date: new Date('2017-02-16T11:00:00.000Z'),
          id: 1487246400,
          isCloudy: false,
          temp: { max: 13, min: 8, val: 13 },
        },
      ])
    );

    mockFetch(mockFn);
    getHomePage();

    expect(screen.getByTestId('loader'));
    expect(mockFn).toBeCalledWith('München', 'DE');

    await waitFor(() => expect(screen.getByText('Clear')).toBeDefined());

    expect(screen.getByText('All reading are in celsius.')).toBeDefined();
    expect(screen.getByText('München')).toBeDefined();
    expect(screen.getByText('Thursday')).toBeDefined();
    expect(screen.getByText('16. February')).toBeDefined();
    expect(screen.queryByTestId('loader')).toBe(null);
  });

  it('should render error message when API call fails', async () => {
    const mockFn = jest.fn(() => Promise.reject({}));

    mockFetch(mockFn);
    getHomePage();

    expect(screen.getByTestId('loader'));
    expect(mockFn).toBeCalledWith('München', 'DE');
    await waitFor(() =>
      expect(screen.getByText('Something went wrong.')).toBeDefined()
    );
  });
});
