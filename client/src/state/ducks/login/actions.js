import types from './types';
import { setUserEmail } from '../userEmail/actions';

let apiUrl;
if (process.env.NODE_ENV === 'production') {
	apiUrl = '/';
} else {
	apiUrl = 'http://localhost:4000/';
}

export const requestLogin = () => {
	return {
		type: types.REQUEST_LOGIN
	};
};

export const loginSuccess = () => {
	return {
		type: types.LOGIN_SUCCESS
	};
};

export const loginFailure = error => {
	return {
		type: types.LOGIN_FAILURE,
		error: error
	};
};

export const fetchLogin = credentials => {
	return dispatch => {
		dispatch(requestLogin());
		const params = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials)
		};
		return fetch(`${apiUrl}login`, params)
			.then(
				response => response.json(),
				error => console.log('An error occured.', error)
			)
			.then(res => {
				if (res.message === 'Success!') {
					dispatch(setUserEmail(res.user.email));
					dispatch(loginSuccess());
				} else {
					dispatch(loginFailure(res.error));
				}
			});
	};
};

export const handleLoginChange = e => {
	e.preventDefault();
	return {
		type: types.HANDLE_LOGIN_CHANGE,
		field: e.target.name,
		value: e.target.value
	};
};

export default {
	requestLogin,
	fetchLogin,
	loginSuccess,
	loginFailure,
	handleLoginChange
};
