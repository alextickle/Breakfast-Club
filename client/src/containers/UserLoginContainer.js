import { connect } from 'react-redux';
import UserLogin from '../routes/UserLogin';
import loginOperations from '../state/ducks/login/operations';

const mapStateToProps = state => ({
	isFetching: state.login.isFetching,
	email: state.login.email,
	password: state.login.password,
	user: state.user
});

const mapDispatchToProps = {
	fetchLogin: loginOperations.fetchLogin,
	handleLoginChange: loginOperations.handleLoginChange
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
