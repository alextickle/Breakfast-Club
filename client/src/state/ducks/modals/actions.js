import types from './types';

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});

export const openModal = (modalType, modalProps) => ({
  type: types.OPEN_MODAL,
  modalType,
  modalProps
});

export default {
  closeModal,
  openModal
};
