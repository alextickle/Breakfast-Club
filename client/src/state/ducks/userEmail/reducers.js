import types from './types';

const initialState = 'gabe@testing.com';

const userEmail = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER_EMAIL:
			return action.userEmail;
		case types.CLEAR_USER_EMAIL:
			return null;
		default:
			return state;
	}
};

export default userEmail;
