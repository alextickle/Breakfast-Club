import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import PastEventContainer from '../containers/PastEventContainer';
import Modal from 'react-modal';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const customStyle = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		zIndex: 5
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '310px',
		height: '475px',
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		justifyContent: 'center'
	}
};

const Calendar = props => {
	if (props.data.loading) {
		return <h1>Loading...</h1>;
	}
	const mapEvents = events => {
		return events.map(bevent => {
			let start = new Date(bevent.date).toISOString().split(".")[0];
			let end = moment(start, "YYYY-MM-DDTHH:mm:ss").add(1, 'hours').toDate();
			let placeName =
				bevent.winner === '1' ? bevent.place_1.name : bevent.place_2.name;
			let id = bevent.id;
			return {
				title: placeName,
				start: start,
				end: end,
				id: id
			};
		});
	};

	return (
		<div>
			<div className="polaroid">
				{props.selectedEventId &&
					props.selectedEventId === props.event.id &&
					props.clearSelectedEvent() &&
					<Redirect to="/current-event" />}
				{props.selectedEventId &&
					props.selectedEventId !== props.event.id &&
					<Modal
						isOpen={props.showModal}
						onRequestClose={() => {
							props.clearSelectedEvent();
							props.closeModal();
						}}
						style={customStyle}
						contentLabel="Modal"
					>
						<PastEventContainer eventId={props.selectedEventId} />
					</Modal>}
			</div>
			<div className="calendar-div">
				<BigCalendar
					events={mapEvents(props.data.events)}
					onSelectEvent={bevent => {
						props.setSelectedEvent(bevent.id);
						props.openModal();
					}}
				/>
			</div>
		</div>
	);
};

export default Calendar;
