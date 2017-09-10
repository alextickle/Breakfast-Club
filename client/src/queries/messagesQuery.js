import { gql } from 'react-apollo';

const messagesQuery = gql`
	query messagesQuery {
		messages {
			id
			content
			user {
				id
				firstName
				lastName
			}
		}
	}
`;

export default messagesQuery;
