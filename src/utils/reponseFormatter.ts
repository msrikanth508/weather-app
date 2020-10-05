import { WeatherItemShape, ServerResponseShape } from '../types';

/**
 * Compose all functions from right
 * @param  {...Functions} fns
 */

const compose = (...fns: Array<any>) => (input: Array<ServerResponseShape>) =>
  fns.reduceRight((acc, fn) => fn(acc), input);
/**
 * Sort array of objects by property
 * @param {Object[]} arr
 * @param {string} key
 */
const sortByDate = (arr: WeatherItemShape[]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  arr.sort((a: WeatherItemShape, b: WeatherItemShape) => a.date - b.date);

/**
 * Convert Kelvin to Celsius
 * @param {number} input
 */
const convertKelvinToCelsius = (input: number): number =>
  Math.floor(parseFloat(String(input)) - 273.15);

/**
 * Prepare data transformation
 * @param {Object[]} data
 */
const dataTransformation = (
  data: Array<ServerResponseShape>
): WeatherItemShape[] =>
  data.map((item) => ({
    id: item.dt,
    date: new Date(item.dt_txt),
    isCloudy: item?.clouds?.all > 0,
    temp: {
      val: convertKelvinToCelsius(item.main.temp),
      min: convertKelvinToCelsius(item.main.temp_min),
      max: convertKelvinToCelsius(item.main.temp_max),
    },
  }));

/**
 * Formate response
 * @param {Object[]} data
 */
export default function reponseFormatter(
  data: Array<ServerResponseShape>
): WeatherItemShape[] {
  if (data.length) {
    return compose(sortByDate, dataTransformation)(data);
  }
  return [];
}
