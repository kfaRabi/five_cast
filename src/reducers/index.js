import { combineReducers } from 'redux';
import WeatherReducer from './red_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
