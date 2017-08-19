import { gql } from "react-apollo";

const messagesQuery = gql`
  query messagesQuery {
    messages {
      content
      author
      user {
        firstName
        lastName
      }
    }
  }
`;

export default messagesQuery;
