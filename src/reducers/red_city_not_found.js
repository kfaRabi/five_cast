import _ from 'lodash';
import {FETCH_WEATHER} from '../actions/index';

export default function(state, action) {
	// instead of using the function(state = false, action),
	// we are initializing it inside the function,
	// because, otherwise sate will be false only wheen state is unintialized.
	// where we want the state(=cityNotFound) to be alsways false in the beginning
	// Only be true when we find "error" property in our action (NOT action.payload) 
	state = false;
	if(action.type === FETCH_WEATHER){
		// console.log(action, _.has(action.payload, "error"));
		if(_.has(action, "error")){
			return true;
		}
	}
	return state;
}