import types from './types';

export const handleChange = e => {
		type: types.HANDLE_CHANGE,
		field: e.target.name,
		value: e.target.value
};

export default {
	handleChange
};
