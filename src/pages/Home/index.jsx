import React from 'react';

import { fetchWeatherData } from '../../api';
import Weather from '../../components/WeatherList';
import WeatherCover from '../../components/WeatherCover';
import Loader from '../../components/Loader';
import styled from 'styled-components';

const Info = styled.p`
  text-align: right;
  font-style: italic;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export default function Home() {
  const [activeWeather, setActiveWeather] = React.useState(null);
  const [state, setState] = React.useState({
    isFetching: false,
    weatherData: [],
    isFetchError: false,
  });

  const cityName = 'München';
  const countryCode = 'DE';

  function handleSelect(item) {
    setActiveWeather(item);
  }

  async function fetchData() {
    setState({
      ...state,
      isFetching: true,
      isFetchError: false,
    });
    try {
      const weatherData = await fetchWeatherData(cityName, countryCode);

      setState({
        isFetching: false,
        isFetchError: false,
        weatherData,
      });

      setActiveWeather(weatherData?.[0] ?? null);
    } catch (e) {
      setState({
        ...state,
        isFetching: false,
        isFetchError: true,
      });
    }
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (state.isFetching) {
    return <Loader />;
  }

  if (state.isFetchError) {
    return <h1>Something went wrong.</h1>;
  }

  if (state.weatherData.length)
    return (
      <>
        <WeatherCover activeWeatherItem={activeWeather} cityName={cityName} />
        <Weather
          data={state.weatherData}
          activeWeatherId={activeWeather ? activeWeather.id : null}
          onSelect={handleSelect}
        />
        <Info>All reading are in celsius.</Info>
      </>
    );

  return null;
}
