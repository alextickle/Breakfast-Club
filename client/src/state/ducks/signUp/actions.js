import types from './types';
import { setUserEmail } from '../userEmail/actions';

let apiUrl;
if (process.env.NODE_ENV === 'production') {
	apiUrl = '/';
} else {
	apiUrl = 'http://localhost:4000/';
}

export const requestSignUp = () => {
	return {
		type: types.REQUEST_SIGN_UP
	};
};

export const signUpSuccess = () => {
	return {
		type: types.SIGN_UP_SUCCESS
	};
};

export const signUpFailure = error => {
	return {
		type: types.SIGN_UP_FAILURE,
		error: error
	};
};

export const fetchSignUp = data => {
	return dispatch => {
		dispatch(requestSignUp());
		const params = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		return fetch(`${apiUrl}signup`, params)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			)
			.then(res => {
				if (res.message === 'Success!') {
					dispatch(setUserEmail(res.user.email));
					dispatch(signUpSuccess());
				} else {
					dispatch(signUpFailure(res.error));
				}
			});
	};
};

export const handleSignUpChange = e => {
	e.preventDefault();
	return {
		type: types.HANDLE_SIGN_UP_CHANGE,
		field: e.target.name,
		value: e.target.value
	};
};

export const addError = (fieldName, message) => {
	return {
		type: types.ADD_ERROR,
		fieldName: fieldName,
		message: message
	};
};

export const clearErrors = () => {
	return {
		type: types.CLEAR_ERRORS
	};
};

export default {
	requestSignUp,
	fetchSignUp,
	signUpSuccess,
	signUpFailure,
	handleSignUpChange,
	addError,
	clearErrors
};
