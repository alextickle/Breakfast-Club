import types from './types';

const initialState = {
	isFetching: false,
	email: '',
	password: '',
	errors: {}
};

const login = (state = initialState, action) => {
	let temp = {};
	switch (action.type) {
		case types.REQUEST_LOGIN:
			return Object.assign({}, state, {
				isFetching: true
			});
		case types.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false
			});
		case types.LOGIN_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				errors: action.errors
			});
		case types.HANDLE_LOGIN_CHANGE:
			temp[action.field] = action.value;
			return Object.assign({}, state, temp);
		case types.SET_USER_EMAIL:
			return state;
		default:
			return state;
	}
};

export default login;
