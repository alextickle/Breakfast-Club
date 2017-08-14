const exampleState = {
	currentMessage: '',
	showMessageBoard: false,
	user: {
		id: 2,
		firstName: 'Alex',
		lastName: 'Tickle',
		email: 'alex@testing.com',
		neighborhood: 'OB',
		voted: false,
		rsvp: false,
		admin: true,
		active: true
	},
	login: {
		isFetching: false,
		fields: {
			email: 'alex@testing.com',
			password: 'Test123'
		},
		errors: {
			email: '',
			password: ''
		}
	}
};

export default exampleState;
