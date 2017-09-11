import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import UserSignUp from '../routes/UserSignUp';
import signUpMutation from '../mutations/signUpMutation';
import signUpOperations from '../state/ducks/signUp/operations';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = state => ({
	errors: state.signUp.errors,
	firstName: state.signUp.firstName,
	lastName: state.signUp.lastName,
	neighborhood: state.signUp.neighborhood,
	email: state.signUp.email,
	password: state.signUp.password,
	verifyPassword: state.signUp.verifyPassword
});

const mapDispatchToProps = {
	handleChange: signUpOperations.handleChange,
	addError: signUpOperations.addError,
	clearErrors: signUpOperations.clearErrors,
	setUser: userOperations.setUser
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(signUpMutation, {
		props: ({ ownProps, mutate }) => ({
			signUp: () =>
				mutate({
					firstName: ownProps.firstName,
					lastName: ownProps.lastName,
					neighborhood: ownProps.neighborhood,
					email: ownProps.email,
					password: ownProps.password
				})
		})
	})
)(UserSignUp);
