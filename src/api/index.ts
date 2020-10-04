import reponseFormatter from '../utils/reponseFormatter';

const BASE_URL = 'https://samples.openweathermap.org/data/2.5/forecast';
const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const CORS_SERVER_END_POINT = 'https://cors-anywhere.herokuapp.com';

export function fetchWeatherData(cityName: string, countryCode: string) {
  return fetch(
    `${CORS_SERVER_END_POINT}/${BASE_URL}?q=${cityName},${countryCode}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Could not able to connect to server.');
      }
      return response.json();
    })
    .then((res) => reponseFormatter(res.list || []))
    .catch((e) => {
      console.log(e);
      return null;
    });
}
