import types from './types';

const initialState = {
	email: 'gabe@testing.com',
	isAdmin: true
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USERL:
			return {
				email: action.email,
				isAdmin: action.isAdmin
			};
		case types.LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default user;
