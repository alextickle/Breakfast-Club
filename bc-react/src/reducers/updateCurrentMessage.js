import initialState from './initialState';

const updateCurrentMessage = (state, action) => {
	switch (action.type) {
		case 'UPDATE-CURRENT-MESSAGE':
			return Object.assign({}, state, {
				currentMessage: action.text
			});
		default:
			return state || initialState;
	}
};

export default updateCurrentMessage;
