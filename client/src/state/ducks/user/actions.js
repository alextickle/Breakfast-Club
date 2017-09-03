import types from './types';

export const clearUser = () => {
	return {
		type: types.CLEAR_USER
	};
};

export const setUser = user => {
	return {
		type: types.SET_USER,
		user: user
	};
};

export default {
	clearUser,
	setUser
};
