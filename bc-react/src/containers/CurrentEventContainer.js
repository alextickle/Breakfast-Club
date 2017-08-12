import { graphql } from "react-apollo";
import { connect } from "react-redux";
import currentEventQuery from "../queries/currentEventQuery";
import CurrentEvent from "../routes/CurrentEvent";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const CurrentEventContainer = graphql(currentEventQuery)(CurrentEvent);
CurrentEventContainer = connect(mapStateToProps)(CurrentEventContainer);

export default CurrentEventContainer;
