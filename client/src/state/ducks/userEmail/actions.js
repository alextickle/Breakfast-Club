import types from './types';

export const setUserEmail = email => {
		type: types.SET_USER_EMAIL,
		userEmail: email
};

export const clearUserEmail = () => {
		type: types.CLEAR_USER_EMAIL
};

export default {
	setUserEmail,
	clearUserEmail
};
