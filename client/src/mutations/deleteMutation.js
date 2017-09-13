import { gql } from "react-apollo";

const deleteMutation = gql`
  mutation delete($type: String!, $id: String!) {
    delete(type: $type, id: $id)
  }
`;

export default deleteMutation;
