import { combineReducers } from 'redux';
import WeatherReducer from './red_weather';
import CityNotFoundReducer from './red_city_not_found';
import HandleErrorMessageReducer from './red_handle_error';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  cityNotFound: CityNotFoundReducer,
  handleErrorMessage: HandleErrorMessageReducer,
});

export default rootReducer;
