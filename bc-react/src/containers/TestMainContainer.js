import TestMain from '../components/TestMain';
import { connect } from 'react-redux';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = {
	setInitialUser: userOperations.setInitialUser
};

const TestMainContainer = connect(mapStateToProps, mapDispatchToProps)(
	TestMain
);

export default TestMainContainer;
