import Main from '../components/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
