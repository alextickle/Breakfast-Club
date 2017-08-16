import types from './types';

const initialState = {
	showMessageBoard: false,
	currentMessage: ''
};

const messageBoard = (state = initialState, action) => {
	switch (action.type) {
		case types.CLEAR_CURRENT_MESSAGE:
			return Object.assign({}, state, {
				currentMessage: ''
			});
		case types.TOGGLE_MESSAGE_BOARD:
			return Object.assign({}, state, {
				showMessageBoard: !state.showMessageBoard
			});
		case types.UPDATE_CURRENT_MESSAGE:
			return Object.assign({}, state, {
				currentMessage: action.text
			});
		default:
			return state;
	}
};

export default messageBoard;
