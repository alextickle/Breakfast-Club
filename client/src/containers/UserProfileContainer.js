import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import userQuery from '../queries/userQuery';
import UserProfile from '../routes/UserProfile';

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
	})
)(UserProfile);
