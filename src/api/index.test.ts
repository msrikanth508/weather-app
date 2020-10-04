import { fetchWeatherData } from './index';
import mockData from '../mockData';

const mockFetch = (fn) => {
  window.fetch = fn;
};

describe('fetchWeatherData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch fn', async () => {
    const mockFn = jest.fn();
    mockFn.mockResolvedValue({});
    mockFetch(mockFn);

    await fetchWeatherData('hyderabad', 'In');
    expect(mockFn).toBeCalledWith(
      'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=hyderabad,In&appid=b6907d289e10d714a6e88b30761fae22'
    );
  });

  it('should handle error', async () => {
    const mockFn = jest.fn();
    mockFn.mockRejectedValueOnce(new Error('error'));
    mockFetch(mockFn);
    const data = await fetchWeatherData('hyderabad', 'In');
    expect(data).toEqual(null);
  });

  it('should do data transformation', async () => {
    const mockFn = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            list: [mockData.list[0]],
          }),
      })
    );

    mockFetch(mockFn);

    const data = await fetchWeatherData('München', 'DE');
    expect(mockFn).toBeCalledWith(
      'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=München,DE&appid=b6907d289e10d714a6e88b30761fae22'
    );

    expect(data).toEqual([
      {
        date: new Date('2017-02-16T11:00:00.000Z'),
        id: 1487246400,
        isCloudy: false,
        temp: { max: 13, min: 8, val: 13 },
      },
    ]);
  });
});
