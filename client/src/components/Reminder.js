import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Reminder = props => {
	let greeting;
	let message1;
	let message2;
	let link;
	let currentEvent = props.event;
	let date = currentEvent.date;
	let user = props.user;

	let dayBefore = function() {
		return (
			<Moment format="dddd">
				{new Date(date).getTime() - 72000000}
			</Moment>
		);
	};

	let revealWinner = function() {
		return (
			<Moment format="h:mm a">
				{new Date(date).getTime() - 72000000}
			</Moment>
		);
	};

	let weekday = function() {
		return (
			<Moment format="dddd">
				{date}
			</Moment>
		);
	};
	let time = function() {
		return (
			<Moment format="h:mm a">
				{date}
			</Moment>
		);
	};

	if (!currentEvent.vote_status) {
		if (user.rsvp) {
			greeting = () => {
				return (
					<span>
						Hey {user.firstName}, a winner has been chosen!
					</span>
				);
			};
			message1 = () => {
				return <span>See you at </span>;
			};
			link = () => {
				return (
					<span>
						{currentEvent.winner === 1
							? currentEvent.place_1.name
							: currentEvent.place_2.name}
					</span>
				);
			};
			message2 = () => {
				return (
					<span>
						{' '}on {weekday()} at {time()}
					</span>
				);
			};
		} else {
			greeting = () => {
				return (
					<span>
						Hey {user.firstName}, last chance to RSVP!
					</span>
				);
			};
			message1 = () => {
				return <span>We will be at </span>;
			};
			link = () => {
				return (
					<span>
						{currentEvent.winner === 1
							? currentEvent.place_1.name
							: currentEvent.place_2.name}
					</span>
				);
			};
			message2 = () => {
				return (
					<span>
						{' '}on {weekday()} at {time()}
					</span>
				);
			};
		}
	} else {
		if (user.voted) {
			if (user.rsvp) {
				greeting = () => {
					return (
						<span>
							Hey {user.firstName}, you're on the guest list!
						</span>
					);
				};
				message1 = () => {
					return <span>The </span>;
				};
				link = () => {
					return <span>details</span>;
				};
				message2 = () => {
					return (
						<span>
							{' '}will be revealed {dayBefore()} at {revealWinner()}
						</span>
					);
				};
			} else {
				greeting = () => {
					return (
						<span>
							Hey {user.firstName}, this {weekday()} at {time()}
						</span>
					);
				};
				message1 = () => {
					return <span>Are you in or are you in? </span>;
				};
				link = () => {
					return <span>RSVP</span>;
				};
				message2 = () => {
					return <span />;
				};
			}
		} else {
			greeting = () => {
				return (
					<span>
						Hey, {user.firstName}! This {weekday()} at {time()}
					</span>
				);
			};
			message1 = () => {
				return (
					<span>
						{currentEvent.place_1.name} or {currentEvent.place_2.name}?{' '}
					</span>
				);
			};
			link = () => {
				return <span>Cast your vote!</span>;
			};
			message2 = () => {
				return <span />;
			};
		}
	}

	return (
		<div>
			{greeting()}
			<br />
			{message1()}
			<Link to="/current-event">
				{link()}
			</Link>
			{message2()}
		</div>
	);
};

export default Reminder;
