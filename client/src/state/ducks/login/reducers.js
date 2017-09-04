import types from './types';

const initialState = {
	email: '',
	password: '',
	errors: {}
};

const login = (state = initialState, action) => {
	let temp = {};
	switch (action.type) {
		case types.HANDLE_CHANGE:
			temp[action.field] = action.value;
			return Object.assign({}, state, temp);
		default:
			return state;
	}
};

export default login;
