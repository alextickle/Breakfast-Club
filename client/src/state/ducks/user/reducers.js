import types from './types';

const initialState = {
	firstName: 'alex',
	lastName: 'tickle',
	email: 'alex@testing.com',
	neighborhood: 'OB',
	voted: false,
	rsvp: false,
	admin: true,
	active: true,
	encryptedPassword:
		'c14e5a43ee5d1659827dae4672bcbbd4139c2e8d6e8baedccef47a74d02a4aeef48d0783420938c411c0ca84d6c999944f3caa612842333195fde7575f354dc0',
	authToken: '4d2acac0-4a3d-11e7-b752-a928b03d6170',
	authTokenExpiration: '2017-07-05 22:21:20.620',
	salt: '4d294420-4a3d-11e7-b752-a928b03d6170',
	createdAt: '2017-06-02 14:52:29',
	updatedAt: '2017-06-02 14:52:29'
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_INITIAL_USER:
			return initialState;
		case types.UPDATE_USER:
			return action.user;
		default:
			return state;
	}
};

export default user;
