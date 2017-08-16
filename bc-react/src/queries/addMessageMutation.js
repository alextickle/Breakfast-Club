import { gql } from 'react-apollo';

const addMessageMutation = gql`
	mutation addMessage($content: String!, $author: String!, $user_id: Int) {
		addMessage(content: $content, author: $author, user_id: $user_id) {
			content
			author
			user_id
		}
	}
`;

export default addMessageMutation;
