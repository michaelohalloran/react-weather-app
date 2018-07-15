import axios from 'axios';
const API_KEY = '59d575c3f00dca798f0ce5625ddacdd2';
const REQUEST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => dispatch=> {
    const url = `${REQUEST_URL}&q=${city},us`;
    axios.get(url)
        .then(res=> {
            // console.log('res is', res);
            dispatch({
                type: FETCH_WEATHER,
                payload: res
            })
        })
        .catch(err=> console.log(err));
    // console.log('axios request inside fetchWeather is ', request);
}