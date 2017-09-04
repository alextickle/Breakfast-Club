import types from './types';

export const openModal = bevent => ({
	type: types.OPEN_MODAL,
	id: bevent.id
});

export const closeModal = () => ({
	type: types.CLOSE_MODAL
});

export default {
	openModal,
	closeModal
};
