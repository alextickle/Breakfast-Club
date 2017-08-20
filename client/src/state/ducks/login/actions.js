import types from './types';

let apiUrl =
if (process.env.NODE_ENV === 'production') {
	apiUrl = '/';
} else {
	apiUrl = 'http://localhost:4000';
}

export const requestLogin = credentials => {
	return {
		type: types.REQUEST_LOGIN,
		fields: {
			email: credentials.email,
			password: credentials.password
		}
	};
};

export const receiveLogin = json => {
	return {
		type: types.RECEIVE_LOGIN,
		user: json
	};
};

export const fetchLogin = data => {
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.

	return function(dispatch) {
		// First dispatch: the app state is updated to inform
		// that the API call is starting.

		dispatch(requestLogin(data));

		// The function called by the thunk middleware can return a value,
		// that is passed on as the return value of the dispatch method.

		// In this case, we return a promise to wait for.
		// This is not required by thunk middleware, but it is convenient for us.
		const params = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		return fetch(`${apiUrl}login`, params)
			.then(
				response => response.json(),
				// Do not use catch, because that will also catch
				// any errors in the dispatch and resulting render,
				// causing an loop of 'Unexpected batch number' errors.
				// https://github.com/facebook/react/issues/6895
				error => console.log('An error occured.', error)
			)
			.then(json =>
				// We can dispatch many times!
				// Here, we update the app state with the results of the API call.

				dispatch(receiveLogin(json))
			);
	};
};

// export const handleLoginSubmit = attributes => {
// 	const params = {
// 		method: 'PUT',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(attributes)
// 	};
// 	fetch(`${apiUrl}login`, params).then(response => {
// 		if (response.ok) {
// 			response.json().then(body => {
// 				if (body.user.active) {
// 					dispatcher.dispatch({
// 						type: 'UPDATE_USER',
// 						attributes: body.user
// 					});
// 				} else {
// 					dispatcher.dispatch({
// 						type: 'INACTIVE_USER'
// 					});
// 				}
// 			});
// 		} else {
// 			dispatcher.dispatch({
// 				type: 'LOGIN_FAIL'
// 			});
// 		}
// 	});
// };

export const handleLoginChange = e => {
	return {
		type: types.HANDLE_LOGIN_CHANGE,
		field: e.target,
		value: e.value
	};
};

export default {
	requestLogin,
	receiveLogin,
	handleLoginChange
};
