import { combineReducers, createStore} from 'redux';
import * as reducers from './ducks';

export default function initStore() {
	const rootReducer = combineReducers(reducers);
	return createStore(
		rootReducer,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
}
