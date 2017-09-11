import types from './types';

export const setUser = (email, isAdmin) => {
	return {
		type: types.SET_USER,
		email: email,
		isAdmin: isAdmin
	};
};

export const logout = () => {
	return {
		type: types.LOGOUT
	};
};

export default {
	setUser,
	logout
};
