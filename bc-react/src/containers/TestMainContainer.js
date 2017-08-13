import TestMain from '../components/TestMain';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const TestMainContainer = connect(mapStateToProps)(TestMain);

export default TestMainContainer;
