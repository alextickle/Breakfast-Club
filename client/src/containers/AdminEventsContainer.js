import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import eventsQuery from "../queries/eventsQuery";
import updateSpeakerMutation from "../mutations/updateSpeakerMutation";
import AdminEvents from "../components/Admin/Event/AdminEvents";
import adminOperations from "../state/ducks/admin/operations";

const mapStateToProps = state => ({
  date: state.admin.date,
  speaker: state.admin.speaker,
  searchTerm: state.admin.searchTerm
});

const mapDispatchToProps = {
  updateSearchTerm: adminOperations.updateSearchTerm
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(eventsQuery),
  graphql(updateSpeakerMutation, {
    props: ({ ownProps, mutate }) => ({
      updateSpeaker: (id, speaker) =>
        mutate({
          variables: {
            id: id,
            speaker: speaker
          }
        })
    })
  })
)(AdminEvents);
