import { gql } from 'react-apollo';

const usersQuery = gql`
	query usersQuery {
		users {
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

export default usersQuery;
