import _ from 'lodash';
import {FETCH_WEATHER, HIDE_MESSAGE} from '../actions/index';

// if the 'action.type' is 'FETCH_WEATHER' and it has error
// that means, the city entered by the user was wrong
// So, send '1' so that the condition becomes true to display
// error message. On the other hand, If the 'action.type'
// is 'HIDE_MESSAGE', that means user preesed the 'cross' button
// to hide the message. So we send '0'.
export default function(state = 1, action) {
	if(action.type === FETCH_WEATHER){
		if(_.has(action, "error")){
			return 1;
		}
		else{
			return 0;
		}
	}
	if(action.type === HIDE_MESSAGE){
		return 0;
	}
	return state;
}