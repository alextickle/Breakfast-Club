import types from './types';

const initialState = {
	userButton: 'admin_button',
	placeButton: 'admin_button',
	eventButton: 'admin_button',
	showModal: false,
	searchTerm: '',
	firstName: '',
	lastName: '',
	email: '',
	neighborhood: '',
	password: '',
	verifyPassword: '',
	name: '',
	yelp_rating: '',
	categories: '',
	price: '',
	address_street: '',
	phone: '',
	date: '',
	speaker: ''
};

const admin = (state = initialState, action) => {
	let temp = {};
	active;
	switch (action.type) {
		case types.SET_ACTIVE_BUTTON:
			temp = {
				userButton: '',
				placeButton: '',
				eventButton: ''
			};
			temp[active.button] = 'action.button_clicked';
			return temp;
		case types.OPEN_MODAL:
			return Object.assign({}, state, {
				showModal: true
			});
		case types.CLOSE_MODAL:
			return Object.assign({}, state, {
				showModal: false
			});
		case types.UPDATE_SEARCH_TERM:
			return Object.assign({}, state, {
				searchTerm: action.term
			});
		case types.UPDATE_FIELD_VALUE:
			temp[action.field] = action.value;
			return Object.assign({}, state, temp);
		default:
			return state;
	}
};

export default admin;
