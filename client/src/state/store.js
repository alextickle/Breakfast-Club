import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';

export default function initStore() {
	const rootReducer = combineReducers(reducers);
	const middleware = applyMiddleware(thunk);
	return createStore(
		rootReducer,
		compose(
			middleware,
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
}
