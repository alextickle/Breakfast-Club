import { gql } from 'react-apollo';

const deactivateUserMutation = gql`
	mutation deactivateUser($email: String!) {
		deactivateUser(email: $email)
	}
`;

export default deactivateUserMutation;
