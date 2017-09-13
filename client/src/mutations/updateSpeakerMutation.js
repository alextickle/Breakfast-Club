import { gql } from "react-apollo";

const updateSpeakerMutation = gql`
  mutation updateSpeaker($id: String!, $speaker: String!) {
    updateSpeaker(id: $id, speaker: $speaker) {
      id
      date
      vote_status
      winner
      active
      speaker
      place_1 {
        id
        name
      }
      place_2 {
        id
        name
      }
    }
  }
`;

export default updateSpeakerMutation;
