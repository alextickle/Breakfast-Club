import types from './types';

const initialState = {
	email: '',
	password: '',
	errors: {}
};

const login = (state = initialState, action) => {
	let temp = {};
	let fieldName;
	switch (action.type) {
		case types.HANDLE_CHANGE:
			fieldName = action.field;
			temp[fieldName] = action.value;
			return Object.assign({}, state, temp);
		default:
			return state;
	}
};

export default login;
