import { gql } from 'react-apollo';

const registerVoteMutation = gql`
	mutation registerVote($userId: String!, $eventId: String!, $choice: Int!) {
		registerVote(userId: $userId, eventId: $eventId, choice: $choice) {
			id
			date
			vote_status
			place_1 {
				name
			}
			place_2 {
				name
			}
			guestLists {
				user {
					firstName
					lastName
				}
			}
		}
	}
`;

export default registerVoteMutation;
