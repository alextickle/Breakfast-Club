import { gql } from 'react-apollo';

const registerVoteMutation = gql`
	mutation registerVote($email: String!, $eventId: String!, $choice: String!) {
		registerVote(email: $email, eventId: $eventId, choice: $choice) {
			event
		}
	}
`;

export default registerVoteMutation;
