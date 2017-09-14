const loginMutation = `
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;

module.exports = loginMutation;
