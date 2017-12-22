import axios from 'axios';

const API_KEY = 'e0ee89713db9a48d15aebe240bbe03d6';

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';



//npm install axios

export function fetchWeather(city) {

  const url = `${rootURL}&q=${city},nz`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request


  };
}
