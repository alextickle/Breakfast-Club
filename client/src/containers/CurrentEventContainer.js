import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import currentEventQuery from '../queries/currentEventQuery';
import userQuery from '../queries/userQuery';
import registerVoteMutation from '../mutations/registerVoteMutation';
import registerRSVPMutation from '../mutations/registerRSVPMutation';
import CurrentEvent from '../routes/CurrentEvent';

const mapStateToProps = state => ({
	userEmail: state.user.email
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
			registerVote: (userId, eventId, choice) =>
				mutate({
					variables: {
						userId,
						eventId,
						choice
					},
					update: (store, { data: { registerVote } }) => {
						let data = store.readQuery({
							query: currentEventQuery
						});
						data.currentEvent.guestLists.push(registerVote);
						store.writeQuery({
							query: currentEventQuery,
							data
						});
						data = store.readQuery({
							query: userQuery,
							variables: {
								email: ownProps.userEmail
							}
						});
						data.user.voted = true;
						store.writeQuery({
							query: userQuery,
							variables: {
								email: ownProps.userEmail
							},
							data
						});
					}
				})
		})
	}),
	graphql(registerRSVPMutation, {
		props: ({ ownProps, mutate }) => ({
			registerRSVP: (userId, rsvpStatus) =>
				mutate({
					variables: {
						userId,
						rsvpStatus
					}
				})
		})
	})
)(CurrentEvent);
