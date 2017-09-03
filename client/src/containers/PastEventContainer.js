import PastEvent from '../components/PastEvent';
import { graphql } from 'react-apollo';
import pastEventQuery from '../queries/pastEventQuery';

export default graphql(pastEventQuery, {
	options: props => ({
		variables: { id: props.eventId }
	})
})(PastEvent);
