const initialState = {
	currentMessage: '',
	showMessageBoard: false,
	user: {
		firstName: 'alex',
		lastName: 'tickle'
	},
	login: {
		isFetching: false,
		fields: null,
		errors: null
	}
};

export default initialState;
