import React, { Component } from 'react';

const RSVPButton = props => {
	console.log('rsvp button', props);
	return (
		<div className="rsvp-button">
			<form className={props.user.rsvp ? 'rsvp yes' : 'rsvp no'}>
				<button
					className={props.user.rsvp ? 'rsvp yes' : 'rsvp no'}
					type="button"
					name="rsvp"
					value={true}
					onClick={e =>
						props.registerRSVP(props.user.id, props.eventId, e.target.value)}
				>
					Yes
				</button>
				<button
					className={props.user.rsvp ? 'rsvp no' : 'rsvp yes'}
					type="button"
					name="rsvp"
					value={false}
					onClick={e =>
						props.registerRSVP(props.user.id, props.eventId, e.target.value)}
				>
					No
				</button>
			</form>
		</div>
	);
};

export default RSVPButton;
