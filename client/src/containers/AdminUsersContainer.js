import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import usersQuery from '../queries/usersQuery';
import AdminUsers from '../components/Admin/AdminUsers';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {
	openModal: adminOperations.openModal,
	closeModal: adminOperations.closeModal,
	updateSearchTerm: adminOperations.updateSearchTerm,
	updateFieldValue: adminOperations.updateFieldValue
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(usersQuery),
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
	})
)(AdminUsers);
