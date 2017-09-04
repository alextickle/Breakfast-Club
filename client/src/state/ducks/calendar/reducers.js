import types from './types';

const initialState = {
	showModal: false,
	selectedEventId: null
};

const calendar = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_MODAL:
			return Object.assign({}, state, {
				showModal: true,
				selectedEventId: action.id
			});
		case types.CLOSE_MODAL:
			return initialState;
		default:
			return state;
	}
};

export default calendar;
