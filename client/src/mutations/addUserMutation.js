import { gql } from "react-apollo";

const addUserMutation = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $neighborhood: String!
  ) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      neighborhood: $neighborhood
    ) {
      id
      firstName
      lastName
      email
      neighborhood
      voted
      rsvp
      admin
      active
    }
  }
`;

export default addUserMutation;
