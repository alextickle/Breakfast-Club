import SideBar from '../components/SideBar';
import { connect } from 'react-redux';
import userEmailOperations from '../state/ducks/userEmail/operations';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {
	logout: userEmailOperations.clearUserEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
