import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	console.log(action);
	if(action.type === FETCH_WEATHER){
		return [action.payload.data.city.name, ...state];
	}	
	return state;
}