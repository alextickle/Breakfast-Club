import { gql } from 'react-apollo';

const registerVoteMutation = gql`
	mutation registerVote($userId: String!, $eventId: String!, $choice: Int!) {
		registerVote(userId: $userId, eventId: $eventId, choice: $choice) {
			id
			attended
			vote
			user {
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
	}
`;

export default registerVoteMutation;
