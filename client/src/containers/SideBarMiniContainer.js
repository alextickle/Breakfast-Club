import SideBarMini from '../components/SideBarMini';
import { connect } from 'react-redux';
import userEmailOperations from '../state/ducks/userEmail/operations';

const mapStateToProps = state => ({
	userEmail: state.userEmail
});

const mapDispatchToProps = {
	logout: userEmailOperations.clearUserEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMini);
