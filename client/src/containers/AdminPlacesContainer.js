import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import placesQuery from '../queries/placesQuery';
import AdminPlaces from '../components/Admin/Place/AdminPlaces';
import adminOperations from '../state/ducks/admin/operations';

const mapStateToProps = state => ({
	name: state.adminOperations.name,
	yelp_rating: state.adminOperations.yelp_rating,
	categories: state.adminOperations.categories,
	price: state.adminOperations.price,
	address_street: state.adminOperations.address_street,
	phone: state.adminOperations.phone
});

const mapDispatchToProps = {
	openModal: adminOperations.openModal,
	closeModal: adminOperations.closeModal,
	updateSearchTerm: adminOperations.updateSearchTerm,
	updateFieldValue: adminOperations.updateFieldValue
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(placesQuery)
)(AdminPlaces);
