import { connect } from 'react-redux';
import UserSignUp from '../routes/UserSignUp';
import signUpOperations from '../state/ducks/signUp/operations';

const mapStateToProps = state => ({
	isFetching: state.signUp.isFetching,
	errors: state.signUp.errors,
	fields: {
		firstName: state.signUp.firstName,
		lastName: state.signUp.lastName,
		neighborhood: state.signUp.neighborhood,
		email: state.signUp.email,
		password: state.signUp.password,
		verifyPassword: state.signUp.verifyPassword
	}
});

const mapDispatchToProps = {
	fetchSignUp: signUpOperations.fetchSignUp,
	handleChange: signUpOperations.handleSignUpChange,
	addError: signUpOperations.addError,
	clearErrors: signUpOperations.clearErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
