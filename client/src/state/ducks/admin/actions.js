import types from './types';

export const setActiveButton = str => {
	return {
		type: types.SET_ACTIVE_BUTTON,
		button: str
	};
};

export const openModal = bevent => {
	return {
		type: types.OPEN_MODAL
	};
};

export const closeModal = () => {
	return {
		type: types.CLOSE_MODAL
	};
};

export const updateSearchTerm = term => {
	return {
		type: types.UPDATE_SEARCH_TERM,
		searchTerm: term
	};
};

export const updateFieldValue = e => {
	return {
		type: types.UPDATE_FIELD_VALUE,
		field: e.target.name,
		value: e.target.value
	};
};

export default {
	setActiveButton,
	openModal,
	closeModal,
	updateSearchTerm,
	updateFieldValue
};
