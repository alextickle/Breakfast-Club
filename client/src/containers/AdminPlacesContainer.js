import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import placesQuery from "../queries/placesQuery";
import updatePlaceMutation from "../mutations/updatePlaceMutation";
import addPlaceMutation from "../mutations/addPlaceMutation";
import AdminPlaces from "../components/Admin/Place/AdminPlaces";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  name: state.admin.name,
  yelp_rating: state.admin.yelp_rating,
  categories: state.admin.categories,
  price: state.admin.price,
  address_street: state.admin.address_street,
  phone: state.admin.phone,
  searchTerm: state.admin.searchTerm,
  showModal: state.admin.showModal
});

const mapDispatchToProps = {
  openModal: adminOperations.openModal,
  closeModal: adminOperations.closeModal,
  updateSearchTerm: adminOperations.updateSearchTerm,
  updateFieldValue: adminOperations.updateFieldValue,
  resetFields: adminOperations.resetFields
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(placesQuery),
  graphql(updatePlaceMutation, {
    props: ({ ownProps, mutate }) => ({
      updatePlace: place =>
        mutate({
          variables: {
            id: place.id,
            name: place.name,
            yelp_rating: place.yelp_rating,
            price: place.price,
            address_street: place.address_street,
            phone: place.phone,
            active: place.active
          }
        })
    })
  }),
  graphql(addPlaceMutation, {
    props: ({ ownProps, mutate }) => ({
      addPlace: (name, yelp_rating, price, categories, address_street, phone) =>
        mutate({
          variables: {
            name: name,
            yelp_rating: yelp_rating,
            price: price,
            categories: categories,
            address_street: address_street,
            phone: phone
          },
          update: (store, { data: { addPlace } }) => {
            const data = store.readQuery({
              query: placesQuery
            });
            data.places.push(addPlace);
            store.writeQuery({ query: placesQuery, data });
          }
        })
    })
  })
)(AdminPlaces);
