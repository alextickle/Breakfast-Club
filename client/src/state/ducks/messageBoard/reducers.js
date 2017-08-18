import types from './types';

const initialState = {
	showMessageBoard: false,
	currentMessage: ''
};

const messageBoard = (state = initialState, action) => {
	console.log('messageAction', action);
	switch (action.type) {
		case types.TOGGLE_MESSAGE_BOARD:
			console.log('toggleMessageBoard calleddfgfs');
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
