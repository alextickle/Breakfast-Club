import { gql } from 'react-apollo';

const pastEventQuery = gql`
	query pastEventQuery($id: String!) {
		event(id: $id) {
			id
			date
			vote_status
			place_1 {
				id
				name
				image_url
				yelp_rating
				address_street
			}
			place_2 {
				id
				name
				image_url
				yelp_rating
				address_street
			}
			guestLists {
				id
				user {
					id
					firstName
					lastName
				}
			}
		}
	}
`;

export default pastEventQuery;
