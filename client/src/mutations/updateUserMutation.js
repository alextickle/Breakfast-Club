import { gql } from 'react-apollo';

const updateUserMutation = gql`
	mutation updateUser($email: String!, $data: JSON!) {
		updateUser(email: $email, data: $data) {
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
