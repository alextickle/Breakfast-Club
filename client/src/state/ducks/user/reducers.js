import types from './types';

const initialState = null;

const user = (state = initialState, action) => {
	switch (action.type) {
		case types.CLEAR_USER:
			return initialState;
		case types.SET_USER:
			return action.user;
		default:
			return state;
	}
};

export default user;
