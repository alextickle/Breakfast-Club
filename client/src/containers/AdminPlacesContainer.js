import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import placesQuery from '../queries/placesQuery';
import AdminPlaces from '../components/Admin/Place/AdminPlaces';
import adminOperations from '../state/ducks/admin/operations';

const mapStateToProps = state => ({
	name: state.admin.name,
	yelp_rating: state.admin.yelp_rating,
	categories: state.admin.categories,
	price: state.admin.price,
	address_street: state.admin.address_street,
	phone: state.admin.phone
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
