import types from './types';

export const handleChange = e => {
	return {
		type: types.HANDLE_CHANGE,
		field: e.target.name,
		value: e.target.value
	};
};

export const addError = (fieldName, message) => {
	return {
		type: types.ADD_ERROR,
		field: fieldName,
		message: message
	};
};

export const clearErrors = () => {
	return {
		type: types.CLEAR_ERRORS
	};
};

export default {
	handleChange,
	addError,
	clearErrors
};
