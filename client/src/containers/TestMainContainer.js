import TestMain from '../components/TestMain';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {};

const TestMainContainer = withRouter(
	connect(mapStateToProps, mapDispatchToProps)(TestMain)
);

export default TestMainContainer;
