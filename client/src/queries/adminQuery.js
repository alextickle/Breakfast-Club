import { gql } from 'react-apollo';

const adminQuery = gql`
	query adminQuery {
		admin {
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

export default adminQuery;
