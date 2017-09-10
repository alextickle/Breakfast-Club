import types from './types';

export const handleChange = e => {
		type: types.HANDLE_CHANGE,
		field: e.target.name,
		value: e.target.value
};

export const addError = (fieldName, message) =>
		type: types.ADD_ERROR,
		fieldName: fieldName,
		message: message
};

export const clearErrors = () => {
		type: types.CLEAR_ERRORS
};

export default {
	handleChange,
	addError,
	clearErrors
};
