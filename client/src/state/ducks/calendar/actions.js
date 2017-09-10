import types from './types';

export const openModal = bevent => ({
	type: types.OPEN_MODAL
});

export const closeModal = () => ({
	type: types.CLOSE_MODAL
});

export const setSelectedEvent = id => ({
	type: types.SET_SELECTED_EVENT,
	id: id
});

export const clearSelectedEvent = () => ({
	type: types.CLEAR_SELECTED_EVENT
});

export default {
	openModal,
	closeModal,
	setSelectedEvent,
	clearSelectedEvent
};
