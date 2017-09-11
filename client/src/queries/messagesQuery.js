import { gql } from 'react-apollo';

const messagesQuery = gql`
	query messagesQuery {
		messages {
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

export default messagesQuery;
