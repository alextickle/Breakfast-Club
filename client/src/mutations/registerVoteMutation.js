import { gql } from 'react-apollo';

const registerVoteMutation = gql`
	mutation registerVote($email: String!, $eventId: String!, $choice: String!) {
		registerVote(email: $email, eventId: $eventId, choice: $choice) {
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
