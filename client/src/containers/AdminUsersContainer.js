import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import usersQuery from "../queries/usersQuery";
import updateUserMutation from "../mutations/updateUserMutation";
import deleteMutation from "../mutations/deleteMutation";
import AdminUsers from "../components/Admin/User/AdminUsers";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  firstName: state.admin.firstName,
  lastName: state.admin.lastName,
  email: state.admin.email,
  neighborhood: state.admin.neighborhood,
  password: state.admin.password,
  verifyPassword: state.admin.verifyPassword,
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
  graphql(usersQuery),
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
            const data = store.readQuery({
              query: usersQuery
            });
            let newArray = data.users.filter(user => user.id != id);
            data.users = newArray;
            store.writeQuery({ query: usersQuery, data });
          }
        })
    })
  })
)(AdminUsers);
