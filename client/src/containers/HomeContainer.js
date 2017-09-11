import Home from '../routes/Home';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import userQuery from '../queries/userQuery';
import currentEventQuery from '../queries/currentEventQuery';
import addEventMutation from '../mutations/addEventMutation';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = state => ({
	userEmail: state.user.email
});

const mapDispatchToProps = {
	logout: userOperations.logout
};

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
	graphql(addEventMutation, {
		props: ({ ownProps, mutate }) => ({
			addEvent: () =>
				mutate({
					refetchQueries: [
						{
							query: currentEventQuery
						}
					]
				})
		})
	})
)(Home);
