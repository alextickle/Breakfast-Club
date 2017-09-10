import { gql } from 'react-apollo';

const addEventMutation = gql`
	mutation addEvent {
		addEvent
	}
`;

export default addEventMutation;
