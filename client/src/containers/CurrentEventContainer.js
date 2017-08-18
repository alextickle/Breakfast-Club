import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import currentEventQuery from '../queries/currentEventQuery';
import CurrentEvent from '../routes/CurrentEvent';

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

let CurrentEventWithData = graphql(currentEventQuery)(CurrentEvent);
const CurrentEventContainer = connect(mapStateToProps)(CurrentEventWithData);

export default CurrentEventContainer;
