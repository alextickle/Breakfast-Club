import { gql } from 'react-apollo';

const addMessageMutation = gql`
	mutation addMessage($content: String!, $author: String!, user_id: Int) {
		addMessage($content: String!, $author: String!, user_id: Int) {
			content
			author
      user_id
		}
	}
`;

export default addMessageMutation;
