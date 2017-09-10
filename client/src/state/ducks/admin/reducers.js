import types from './types';

const messageBoard = (state = false, action) => {
	switch (action.type) {
		case types.TOGGLE_MESSAGE_BOARD:
			return !state;
		default:
			return state;
	}
};

export default messageBoard;
