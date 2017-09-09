import { gql } from 'react-apollo';

const messagesQuery = gql`
	query messagesQuery {
		messages {
			id
			content
			user {
				firstName
				lastName
			}
		}
	}
`;

export default messagesQuery;
