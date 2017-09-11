import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import userQuery from '../queries/userQuery';
import updateUserMutation from '../mutations/updateUserMutation';
import deactivateUserMutation from '../mutations/deactivateUserMutation';
import UserProfile from '../routes/UserProfile';
import userProfileOperations from '../state/ducks/userProfile/operations';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = state => ({
	userEmail: state.user.email,
	firstName: state.userProfile.firstName,
	lastName: state.userProfile.lastName,
	email: state.userProfile.email,
	neighborhood: state.userProfile.neighborhood,
	editIcon: state.userProfile.editIcon,
	readOnly: state.userProfile.readOnly,
	title: state.userProfile.title,
	header: state.userProfile.header
});

const mapDispatchToProps = {
	setInitialUserData: userProfileOperations.setInitialUserData,
	setSaveState: userProfileOperations.setSaveState,
	setEditIconLink: userProfileOperations.setEditIconLink,
	logout: userEmailOperations.clearUserEmail
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(userQuery, {
		options: props => ({
			variables: { email: props.userEmail }
		})
	}),
	graphql(updateUserMutation, {
		props: ({ ownProps, mutate }) => ({
			updateUser: data =>
				mutate({
					variables: {
						email: ownProps.userEmail,
						data
					}
				})
		})
	}),
	graphql(deactivateUserMutation, {
		props: ({ ownProps, mutate }) => ({
			deactivateUser: () =>
				mutate({
					variables: {
						email: ownProps.userEmail
					}
				})
		})
	})
)(UserProfile);
