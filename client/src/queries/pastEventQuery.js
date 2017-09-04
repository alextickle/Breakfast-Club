import { gql } from 'react-apollo';

const pastEventQuery = gql`
	query pastEventQuery($id: Int!) {
		event(id: $id) {
			id
			date
			vote_status
			place_1 {
				name
				image_url
				yelp_rating
				address_street
			}
			place_2 {
				name
				image_url
				yelp_rating
				address_street
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

export default pastEventQuery;
