import { gql } from "react-apollo";

const userQuery = gql`
  query userQuery($id: String!) {
    user(id: $id) {
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

export default userQuery;
