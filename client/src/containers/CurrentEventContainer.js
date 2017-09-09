import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import currentEventQuery from '../queries/currentEventQuery';
import userQuery from '../queries/userQuery';
import registerVoteMutation from '../mutations/registerVoteMutation';
import registerRSVPMutation from '../mutations/registerRSVPMutation';
import CurrentEvent from '../routes/CurrentEvent';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(userQuery, {
		name: 'userQuery',
		options: props => ({
			variables: { email: props.userEmail }
		})
	}),
	graphql(currentEventQuery, {
		name: 'currentEventQuery'
	}),
	graphql(registerVoteMutation, {
		props: ({ ownProps, mutate }) => ({
			registerVote: (eventId, choice) =>
				mutate({ email: ownProps.email, eventId, choice })
		})
	}),
	graphql(registerRSVPMutation, {
		props: ({ ownProps, mutate }) => ({
			registerRSVP: vars => mutate({ vars })
		})
	})
)(CurrentEvent);
