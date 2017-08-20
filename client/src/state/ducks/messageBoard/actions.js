import types from './types';

export const toggleMessageBoard = () => {
	return {
		type: types.TOGGLE_MESSAGE_BOARD
	};
};

export default {
	toggleMessageBoard
};
