import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import eventsQuery from '../queries/eventsQuery';
import Calendar from '../components/Calendar';
import calendarOperations from '../state/ducks/calendar/operations';

const mapStateToProps = (state, ownProps) => ({
	showModal: state.calendar.showModal,
	selectedEventId: state.calendar.selectedEventId
});

const mapDispatchToProps = {
	openModal: calendarOperations.openModal,
	closeModal: calendarOperations.closeModal,
	setSelectedEvent: calendarOperations.setSelectedEvent,
	clearSelectedEvent: calendarOperations.setSelectedEvent
};

export default compose(
	graphql(eventsQuery),
	connect(mapStateToProps, mapDispatchToProps)
)(Calendar);
