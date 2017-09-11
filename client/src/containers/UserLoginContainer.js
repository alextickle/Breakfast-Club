import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import UserLogin from '../routes/UserLogin';
import loginMutation from '../mutations/loginMutation';
import loginOperations from '../state/ducks/login/operations';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = (state, ownProps) => ({
	email: state.login.email,
	password: state.login.password,
	history: ownProps.history
});

const mapDispatchToProps = {
	handleChange: loginOperations.handleChange,
	setUser: userOperations.setUser
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(loginMutation, {
		props: ({ ownProps, mutate }) => ({
			login: () =>
				mutate({ email: ownProps.email, password: ownProps.password })
		})
	})
)(UserLogin);
