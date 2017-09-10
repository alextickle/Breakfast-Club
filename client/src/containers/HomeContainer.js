import Home from '../routes/Home';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import userQuery from '../queries/userQuery';
import currentEventQuery from '../queries/currentEventQuery';
import addEventMutation from '../mutations/addEventMutation';
import userEmailOperations from '../state/ducks/userEmail/operations';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {
	logout: userEmailOperations.clearUserEmail
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
