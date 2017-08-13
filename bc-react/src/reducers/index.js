import { combineReducers } from 'redux';
import updateCurrentMessage from './updateCurrentMessage';
import clearCurrentMessage from './clearCurrentMessage';

const reducers = combineReducers({
	updateCurrentMessage,
	clearCurrentMessage
});

export default reducers;
