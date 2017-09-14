const userQuery = `
	query userQuery($email: String!) {
		user(email: $email) {
			id
			firstName
			lastName
			email
			neighborhood
			voted
			rsvp
			admin
			active
		}
	}
`;

module.exports = userQuery;
