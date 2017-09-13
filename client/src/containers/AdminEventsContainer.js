import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import eventsQuery from "../queries/eventsQuery";
import usersQuery from "../queries/usersQuery";
import updateSpeakerMutation from "../mutations/updateSpeakerMutation";
import AdminEvents from "../components/Admin/Event/AdminEvents";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  date: state.admin.date,
  speaker: state.admin.speaker,
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
  graphql(eventsQuery),
  graphql(updateUserMutation, {
    props: ({ ownProps, mutate }) => ({
      updateUser: user =>
        mutate({
          variables: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            neighborhood: user.neighborhood
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
            type: "User"
          },
          update: (store, { data: { deleteMutation } }) => {
            if (store.data.users) {
              const data = store.readQuery({
                query: usersQuery
              });
              let newArray = data.users.filter(user => user.id != id);
              data.users = newArray;
              store.writeQuery({ query: usersQuery, data });
            }
          }
        })
    })
  })
)(AdminEvents);
