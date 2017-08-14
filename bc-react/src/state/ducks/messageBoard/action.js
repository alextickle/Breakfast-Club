import types from './types';

export const updateCurrentMessage = text => {
	return {
		type: types.UPDATE_CURRENT_MESSAGE,
		text: text
	};
};

export const toggleMessageBoard = () => {
	return {
		type: types.TOGGLE_MESSAGE_BOARD
	};
};

export const clearCurrentMessage = () => {
	return {
		type: types.CLEAR_CURRENT_MESSAGE
	};
};

export default {
	updateCurrentMessage,
	toggleMessageBoard,
	clearCurrentMessage
};
