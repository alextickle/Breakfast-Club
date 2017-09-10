import types from './types';

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

export const setSelectedEvent = id => {
	return {
		type: types.SET_SELECTED_EVENT,
		id: id
	};
};

export const clearSelectedEvent = () => {
	return {
		type: types.CLEAR_SELECTED_EVENT
	};
};

export default {
	openModal,
	closeModal,
	setSelectedEvent,
	clearSelectedEvent
};
