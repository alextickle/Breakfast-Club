import types from './types';

const initialState = null;

const userEmail = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER_EMAIL:
			return action.userEmail;
		case types.CLEAR_USER_EMAIL:
			return initialState;
		default:
			return state;
	}
};

export default userEmail;
