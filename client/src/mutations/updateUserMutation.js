import { gql } from 'react-apollo';

const updateUserMutation = gql`
	mutation updateUser(
		$email: String!
		$firstName: String!
		$lastName: String!
		$neighborhood: String!
	) {
		updateUser(
			email: $email
			firstName: $firstName
			lastName: $lastName
			neighborhood: $neighborhood
		) {
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

export default updateUserMutation;
