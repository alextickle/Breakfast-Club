const addMessageMutation = `
	mutation addMessage($content: String!, $user_id: String!) {
		addMessage(content: $content, user_id: $user_id) {
			id
			content
			createdAt
			user {
				id
				firstName
				lastName
			}
		}
	}
`;

module.exports = addMessageMutation;
