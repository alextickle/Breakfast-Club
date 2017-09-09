import { gql } from 'react-apollo';

const currentEventQuery = gql`
	query currentEventQuery {
		currentEvent {
			id
			date
			winner
			vote_status
			place_1 {
				id
				name
				address_street
				address_city
				address_state
				address_zip
				phone
				yelp_rating
				image_url
				categories
				review_count
				price
				url
				active
			}
			place_2 {
				id
				name
				address_street
				address_city
				address_state
				address_zip
				phone
				yelp_rating
				image_url
				categories
				review_count
				price
				url
				active
			}
			guestLists {
				id
				user {
					id
					firstName
					lastName
					voted
					rsvp
				}
			}
		}
	}
`;

export default currentEventQuery;
