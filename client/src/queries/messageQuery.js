import { gql } from 'react-apollo';

const messageQuery = gql`
  query messageQuery($id: String!) {
    message(id: $id) {
      id
      content
    }
  }
`;

export default messageQuery;
