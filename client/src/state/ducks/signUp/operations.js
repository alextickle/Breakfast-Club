import actions from './actions';

export const requestSignUp = actions.requestSignUp;

export const fetchSignUp = actions.fetchSignUp;

export const signUpSuccess = actions.signUpSuccess;

export const signUpFailure = actions.signUpFailure;

export const handleSignUpChange = actions.handleSignUpChange;

export const addError = actions.addError;

export const clearErrors = actions.clearErrors;

export default {
	requestSignUp,
	fetchSignUp,
	signUpSuccess,
	signUpFailure,
	handleSignUpChange,
	addError,
	clearErrors
};
