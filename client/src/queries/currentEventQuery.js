import { gql } from 'react-apollo';

const currentEventQuery = gql`
	query currentEventQuery {
		currentEvent {
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

export default currentEventQuery;
