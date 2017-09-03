import Reminder from '../components/Reminder';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import userQuery from '../queries/userQuery';
import currentEventQuery from '../queries/currentEventQuery';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(userQuery, {
		options: props => ({
			variables: { email: props.userEmail }
		})
	}),
	graphql(currentEventQuery)
)(Reminder);
