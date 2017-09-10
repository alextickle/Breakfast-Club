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
		searchTerm: searchTerm
	};
};

export default {
	setActiveButton,
	openModal,
	closeModal,
	updateSearchTerm
};
