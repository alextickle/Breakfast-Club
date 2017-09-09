import React from 'react';
import EventDetail from '../components/EventDetail';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import Moment from 'react-moment';
import 'moment-timezone';

const CurrentEvent = props => {
	if (props.userQuery.loading || props.currentEventQuery.loading) {
		return <h1>Loading</h1>;
	}
	console.log(props);
	return (
		<div className="wrapper">
			<SideBar />
			<div className="event-page">
				<div className="nested">
					<Header />
					<SideBarMini />
					<div className="event-date">
						<Moment format="dddd, MMMM DD @ h:mm A">
							{props.currentEventQuery.currentEvent.date}
						</Moment>
					</div>
					<EventDetail
						event={props.currentEventQuery.currentEvent}
						user={props.userQuery.user}
					/>
				</div>
			</div>
			<img
				className="fruit-border"
				src="../Images/fruit-border.jpg"
				alt="fruit"
			/>
		</div>
	);
};

export default CurrentEvent;
