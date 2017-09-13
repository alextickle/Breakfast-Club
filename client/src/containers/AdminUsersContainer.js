import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import usersQuery from "../queries/usersQuery";
import updateUserMutation from "../mutations/updateUserMutation";
import deleteMutation from "../mutations/deleteMutation";
import addUserMutation from "../mutations/addUserMutation";
import AdminUsers from "../components/Admin/User/AdminUsers";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  firstName: state.admin.firstName,
  lastName: state.admin.lastName,
  email: state.admin.email,
  neighborhood: state.admin.neighborhood,
  password: state.admin.password,
  verifyPassword: state.admin.verifyPassword,
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
            let newArray = data.users.filter(user => user.id !== id);
            data.users = newArray;
            store.writeQuery({ query: usersQuery, data });
          }
        })
    })
  }),
  graphql(addUserMutation, {
    props: ({ ownProps, mutate }) => ({
      addUser: (email, password, firstName, lastName, neighborhood) =>
        mutate({
          variables: {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            neighborhood: neighborhood
          },
          update: (store, { data: { addUser } }) => {
            const data = store.readQuery({
              query: usersQuery
            });
            data.users.push(addUser);
            store.writeQuery({ query: usersQuery, data });
          }
        })
    })
  })
)(AdminUsers);
