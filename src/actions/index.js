import axios from 'axios';
const API_KEY = "88ce2e3459686c39fa68ceea3db4e8a6";
const COUNTRY = "BD";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'
// for old package.json use export default..
// for updated package.json just use export
export function fetchWeatherData(CITY = "dhaka", UNITS = "metric"){
	// console.log("city: ", CITY);
	const url = `${API_URL}&q=${CITY},${COUNTRY}&units=${UNITS}`;

	// axios returns a promise that we need to wait and work with
	// but,before passing this promise to all the reducers using 
	// the dispathcer, our redux-promise middleware will make
	// sure that, it will do everything needs to be done 
	// so that all the reducers get palin old json
	// data instead of the promise.
	const requestPromise = axios.get(url);

	// console.log(requestPromise);

	return {
		type: FETCH_WEATHER,
		payload: requestPromise,
	};
}

// create action to hide the error message from 'CityList' Container
export const HIDE_MESSAGE = "HIDE_MESSAGE";
export function hideErrorMessage(){
	return {
		type: HIDE_MESSAGE,
		payload: null,
	}
}