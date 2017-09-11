import types from './types';

const initialState = {
	firstName: '',
	lastName: '',
	neighborhood: '',
	email: '',
	password: '',
	verifyPassword: '',
	errors: {}
};

const signUp = (state = initialState, action) => {
	let temp = {};
	let tempErrors = {};
	let fieldName;
	switch (action.type) {
		case types.HANDLE_CHANGE:
			fieldName = action.field;
			temp[fieldName] = action.value;
			return Object.assign({}, state, temp);
		case types.ADD_ERROR:
			temp = {};
			fieldName = action.field;
			tempErrors = Object.assign({}, state.errors);
			tempErrors[fieldName] = action.message;
			temp['errors'] = tempErrors;
			return Object.assign({}, state, temp);
		case types.CLEAR_ERRORS:
			return Object.assign({}, state, {
				errors: {}
			});
		default:
			return state;
	}
};

export default signUp;
