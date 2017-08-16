import types from './types';

export const updateUser = user => {
	return {
		type: types.UPDATE_USER,
		user: user
	};
};

export const setInitialUser = () => {
	return {
		type: types.SET_INITIAL_USER
	};
};

export default {
	updateUser,
	setInitialUser
};
