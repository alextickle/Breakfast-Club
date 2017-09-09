import { gql } from 'react-apollo';

const registerRSVPMutation = gql`
	mutation registerRSVP($userId: Int!, $eventId: Int!, $rsvpStatus: Boolean!) {
		registerRSVP(userId: $userId, eventId: $eventId, rsvpStatus: $rsvpStatus) {
			event
		}
	}
`;

export default registerRSVPMutation;
