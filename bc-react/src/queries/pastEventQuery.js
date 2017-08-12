import { gql } from "react-apollo";

const pastEventQuery = gql`
  query pastEventQuery($id: String!) {
    event(id: $id) {
      date
      vote_status
      place_1 {
        name
      }
      place_2 {
        name
      }
      guestLists {
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

export default pastEventQuery;
