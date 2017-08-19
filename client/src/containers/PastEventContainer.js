import { graphql } from "react-apollo";
import pastEventQuery from "../queries/pastEventQuery";
import PastEvent from "../routes/PastEvent";

const PastEventContainer = graphql(pastEventQuery, {
  options: props => ({
    variables: { id: props.match.params.id }
  })
})(PastEvent);

export default PastEventContainer;
