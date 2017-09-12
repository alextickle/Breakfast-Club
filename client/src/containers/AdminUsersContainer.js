import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import usersQuery from '../queries/usersQuery';
import AdminUsers from '../components/Admin/User/AdminUsers';
import adminOperations from '../state/ducks/admin/operations';

const mapStateToProps = state => ({
	firstName: state.admin.firstName,
	lastName: state.admin.lastName,
	email: state.admin.email,
	neighborhood: state.admin.neighborhood,
	password: state.admin.password,
	verifyPassword: state.admin.verifyPassword
});

const mapDispatchToProps = {
	openModal: adminOperations.openModal,
	closeModal: adminOperations.closeModal,
	updateSearchTerm: adminOperations.updateSearchTerm,
	updateFieldValue: adminOperations.updateFieldValue
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(usersQuery)
)(AdminUsers);
