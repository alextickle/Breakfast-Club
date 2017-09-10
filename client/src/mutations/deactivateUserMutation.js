import { gql } from 'react-apollo';

const deactivateUserMutation = gql`
	mutation deactivateUser($email: String!)
`;

export default deactivateUserMutation;
