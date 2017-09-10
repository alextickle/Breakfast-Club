import types from './types';

const initialState = {
	showModal: false,
	selectedEventId: null
};

const calendar = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_MODAL:
			return Object.assign({}, state, {
				showModal: true
			});
		case types.CLOSE_MODAL:
			return Object.assign({}, state, {
				showModal: false
			});
		case types.SET_SELECTED_EVENT:
			return Object.assign({}, state, {
				selectedEventId: action.id
			});
		case types.CLEAR_SELECTED_EVENT:
			return Object.assign({}, state, {
				selectedEventId: null
			});
		default:
			return state;
	}
};

export default calendar;
