import { gql } from 'react-apollo';

const eventsQuery = gql`
	query eventsQuery {
		events {
			id
			date
			vote_status
			winner
			active
			speaker
			place_1 {
				id
				name
			}
			place_2 {
				id
				name
			}
		}
	}
`;

export default eventsQuery;
