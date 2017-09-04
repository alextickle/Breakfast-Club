import types from './types';

const initialState = {
	isFetching: false,
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
	switch (action.type) {
		case types.REQUEST_SIGN_UP:
			return Object.assign({}, state, {
				isFetching: true
			});
		case types.SIGN_UP_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false
			});
		case types.SIGN_UP_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				errors: action.errors
			});
		case types.HANDLE_SIGN_UP_CHANGE:
			temp[action.field] = action.value;
			return Object.assign({}, state, temp);
		case types.ADD_ERROR:
			temp = {};
			tempErrors = Object.assign({}, state.errors);
			tempErrors[action.fieldName] = message;
			temp['errors'] = tempErrors;
			return Object.assign({}, state, temp);
		case types.CLEAR_ERRORS:
			return Object.assign({}, state, {
				errors: {}
			});
		case types.SET_USER_EMAIL:
			return state;
		default:
			return state;
	}
};

export default signUp;
