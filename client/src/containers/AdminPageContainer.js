import { connect } from 'react-redux';
import AdminPage from '../routes/AdminPage';
import adminOperations from '../state/ducks/admin/operations';

const mapStateToProps = state => ({
	userButton: state.admin.userButton,
	placeButton: state.admin.placeButton,
	eventButton: state.admin.eventButton
});

const mapDispatchToProps = {
	setActiveButton: adminOperations.setActiveButton
};

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(
	AdminPage
);

export default AdminPageContainer;
