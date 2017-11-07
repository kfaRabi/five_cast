const API_KEY = "88ce2e3459686c39fa68ceea3db4e8a6";
let API_URL = `api.openweathermap.org/data/2.5/forecast?`;
default export function fetchWeatherData(city){
	url = `${API_URL}q=${city},bd?unit`;
}