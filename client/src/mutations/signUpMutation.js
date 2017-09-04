import { gql } from 'react-apollo';

const signUpMutation = gql`
	mutation signUp(
		$firstName: String!
		$lastName: String!
		$neighborhood: String!
		$email: String!
		$password: String!
	) {
		signUp(
			firstName: $firstName
			lastName: $lastName
			neighborhood: $neighborhood
			email: $email
			password: $password
		)
	}
`;

export default signUpMutation;
