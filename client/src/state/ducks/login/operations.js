import actions from './actions';

export const requestLogin = actions.requestLogin;

export const fetchLogin = actions.fetchLogin;

export const loginSuccess = actions.loginSuccess;

export const loginFailure = actions.loginFailure;

export const handleLoginChange = actions.handleLoginChange;

export default {
	requestLogin,
	fetchLogin,
	loginSuccess,
	loginFailure,
	handleLoginChange
};
