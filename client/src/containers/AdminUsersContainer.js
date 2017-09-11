import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import usersQuery from '../queries/usersQuery';
import AdminUsers from '../components/Admin/User/AdminUsers';
import adminOperations from '../state/ducks/admin/operations';

const mapStateToProps = state => ({
	firstName: state.adminOperations.firstName,
	lastName: state.adminOperations.lastName,
	email: state.adminOperations.email,
	neighborhood: state.adminOperations.neighborhood,
	password: state.adminOperations.password,
	verifyPassword: state.adminOperations.verifyPassword
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
