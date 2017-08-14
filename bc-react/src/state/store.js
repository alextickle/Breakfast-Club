import { combineReducers, createStore } from 'redux';
import * as reducers from '../reducers';

export default function initStore() {
	const rootReducer = combineReducers(reducers);
	return createStore(rootReducer);
}
