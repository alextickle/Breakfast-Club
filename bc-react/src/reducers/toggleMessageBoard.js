import initialState from '../state/initialState';

const toggleMessageBoard = (state, action) => {
	switch (action.type) {
		case 'TOGGLE-MESSAGE-BOARD':
			return Object.assign({}, state, {
				showMessageBoard: !state.showMessageBoard
			});
		default:
			return state || initialState;
	}
};

export default toggleMessageBoard;
