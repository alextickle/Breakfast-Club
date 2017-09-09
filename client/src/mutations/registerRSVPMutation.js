import { gql } from 'react-apollo';

const registerRSVPMutation = gql`
	mutation registerRSVP($userId: String!, $rsvpStatus: Boolean!) {
		registerRSVP(userId: $userId, rsvpStatus: $rsvpStatus) {
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
`;

export default registerRSVPMutation;
