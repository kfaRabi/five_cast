import { combineReducers } from 'redux';
import WeatherReducer from './red_weather';
import CityNotFoundReducer from './red_city_not_found';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  cityNotFound: CityNotFoundReducer,
});

export default rootReducer;
