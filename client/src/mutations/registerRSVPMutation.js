import { gql } from 'react-apollo';

const registerRSVPMutation = gql`
	mutation registerRSVP(
		$userId: String!
		$eventId: String!
		$rsvpStatus: Boolean!
	) {
		registerRSVP(userId: $userId, eventId: $eventId, rsvpStatus: $rsvpStatus) {
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

export default registerRSVPMutation;
