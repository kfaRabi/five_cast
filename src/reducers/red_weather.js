import _ from 'lodash';
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	// although we passed promise as a payload
	// redux-promise middleware processed it
	// and passed us the returned data.

	// console.log(action);
	
	if(action.type === FETCH_WEATHER){
		// never mutate state... which means don't 
		// do anything like.. state += 1 and then
		// return state.

		// console.log(_.has(action.payload, "status"));
		if(_.has(action.payload, "status")){
			// if there is no status property, it means that 
			// there was something wrong with the request
			// otherwise, its probably fine.
			return [action.payload.data, ...state];
		}
		else{
			return [{notFound: true}];
		}
	}	
	return state;
}