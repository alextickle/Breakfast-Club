import types from './types';

export const setSaveState = data => {
	return {
		type: types.SET_SAVE_STATE,
		data: data
	};
};

export const setEditIconLink = link => {
	return {
		type: types.SET_EDIT_ICON_LINK,
		link: link
	};
};

export const setInitialUserData = user => {
	return {
		type: types.SET_INITIAL_USER_DATA,
		user: user
	};
};

export const updateUserData = e => {
	return {
		type: types.UPDATE_USER_DATA,
		field: e.target.name,
		value: e.target.value
	};
};

export default {
	setSaveState,
	setEditIconLink,
	setInitialUserData,
	updateUserData
};
