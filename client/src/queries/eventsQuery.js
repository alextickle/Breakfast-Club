import { gql } from 'react-apollo';

const eventsQuery = gql`
	query eventsQuery {
		events {
			id
			date
			vote_status
			place_1 {
				name
			}
			place_2 {
				name
			}
			winner
			active
			speaker
		}
	}
`;

export default eventsQuery;
