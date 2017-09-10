import types from './types';

export const setSaveState = data => {
		type: types.SET_SAVE_STATE,
		data: data
	};

export default setEditIconLink = link => {
		type: types.SET_EDIT_ICON_LINK,
		link: link
	};

export default setInitialUserData = user => {
	type: types.SET_INITIAL_USER_DATA,
	user: user
}

export default updateUserData = e => {
	type: types.SET_INITIAL_USER_DATA,
	field: e.target.name,
	value: e.target.value
}

export default {
	setSaveState,
	setEditIconLink,
	setInitialUserData,
	updateUserData
};
