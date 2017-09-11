import React from 'react';

const RSVPButton = props => {
	return (
		<div className="rsvp-button">
			<form className={props.user.rsvp ? 'rsvp yes' : 'rsvp no'}>
				<button
					className={props.user.rsvp ? 'rsvp yes' : 'rsvp no'}
					type="button"
					name="rsvp"
					value={true}
					onClick={e =>
						props.registerRSVP(props.user.id, e.target.value === 'true')}
				>
					Yes
				</button>
				<button
					className={props.user.rsvp ? 'rsvp no' : 'rsvp yes'}
					type="button"
					name="rsvp"
					value={false}
					onClick={e =>
						props.registerRSVP(props.user.id, e.target.value === 'true')}
				>
					No
				</button>
			</form>
		</div>
	);
};

export default RSVPButton;
