import React, { Component } from 'react';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice';

const EventDetail = props => {
	let winner;
	if (props.event.winner) {
		if (props.event.winner === 1) {
			winner = props.event.place_1.name;
		} else {
			winner = props.event.place_2.name;
		}
	}
	let guestList;
	//if no users have RSVPd yet, return "No RSVPs yet"
	if (props.event.guestLists.length === 0) {
		guestList = <div className="flex-item">No RSVPs yet</div>;
	} else {
		//if one or more users have RSVPd, return the user's first name and first initial of the last name
		guestList = props.event.guestLists.map(function(guestList, i) {
			return (
				<span className="flex-item" key={i}>
					{guestList.user.firstName}&nbsp;{guestList.user.lastName.slice(0, 1)}.,
				</span>
			);
		});
	}

	return (
		<div className="events-page">
			{props.event.vote_status &&
				!props.user.voted &&
				<div className="voting">
					{/*this says: if the winner is null, show the place option along with the vote button. If the winner is not null, show the place option that won */}
					{/* option 1 */}
					<div className="option">
						{(props.event.winner === 1 || props.event.winner === null) &&
							<EventChoice
								user={props.user}
								event={props.event}
								place={props.event.place_1}
								registerVote={props.registerVote}
								choice="1"
							/>}
					</div>
					<div className="vs">VS</div>
					{/* option 2 */}
					<div className="option">
						{(props.event.winner === 2 || props.event.winner === null) &&
							<EventChoice
								user={props.user}
								event={props.event}
								place={props.event.place_2}
								registerVote={props.registerVote}
								choice="2"
							/>}
					</div>
				</div>}
			{/*this says: if voting is closed or if the user has already voted, show the event details and the RSVP button */}
			{(!props.event.vote_status || props.user.voted) &&
				<div className="event-details">
					<div className="flex-item-header">
						<div className="detail">Where:</div>
						<div className="flex-item">
							{winner || `Still voting...`}
						</div>
					</div>
					<div className="flex-item-header">
						<div className="detail">Guest Speaker:</div>
						<div className="flex-item">
							{props.event.speaker || `Nobody lined up yet...`}
						</div>
					</div>
					<div className="flex-item-header">
						<div className="detail">RSVP:</div>
						<RSVPButton
							user={props.user}
							eventId={props.event.id}
							registerRSVP={props.registerRSVP}
						/>
					</div>
					<div className="flex-item-header">
						<div className="detail">Who's In:</div>
						<div className="RSVP">
							{/* list of users who RSVP'd yes */}
							{guestList}
						</div>
					</div>
				</div>}
		</div>
	);
};

export default EventDetail;
