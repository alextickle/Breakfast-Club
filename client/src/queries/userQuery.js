import { gql } from 'react-apollo';

const userQuery = gql`
	query userQuery($email: String!) {
		user(email: $email) {
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

export default userQuery;
