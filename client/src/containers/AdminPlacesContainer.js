import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import placesQuery from "../queries/placesQuery";
import updatePlaceMutation from "../mutations/updatePlaceMutation";
import deleteMutation from "../mutations/deleteMutation";
import AdminPlaces from "../components/Admin/Place/AdminPlaces";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  name: state.admin.name,
  yelp_rating: state.admin.yelp_rating,
  categories: state.admin.categories,
  price: state.admin.price,
  address_street: state.admin.address_street,
  phone: state.admin.phone,
  searchTerm: state.admin.searchTerm
});

const mapDispatchToProps = {
  openModal: adminOperations.openModal,
  closeModal: adminOperations.closeModal,
  updateSearchTerm: adminOperations.updateSearchTerm,
  updateFieldValue: adminOperations.updateFieldValue
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
  graphql(deleteMutation, {
    props: ({ ownProps, mutate }) => ({
      delete: id =>
        mutate({
          variables: {
            id: id,
            type: "Place"
          },
          update: (store, { data: { deleteMutation } }) => {
            const data = store.readQuery({
              query: placesQuery
            });
            let newArray = data.places.filter(place => place.id != id);
            data.places = newArray;
            store.writeQuery({ query: placesQuery, data });
          }
        })
    })
  })
)(AdminPlaces);
