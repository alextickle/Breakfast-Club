import types from './types';

const initialState = {
	modalType: null,
	modalProps: {}
};

const modals = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_MODAL:
			return {
				modalType: action.modalType,
				modalProps: action.modalProps
			};
		case types.CLOSE_MODAL:
			return initialState;
		default:
			return state;
	}
};

export default modals;
