import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const PastEvent = props => {
	if (props.data.loading) {
		return <h1>Loading..</h1>;
	}

	const getFullName = (item, index) => {
		let fullname = [item.firstName, item.lastName.slice(0, 1)].join(' ');
		return (
			<span key={index}>
				{fullname}.,{' '}
			</span>
		);
	};

	let event = props.data.event;
	let place = event.winner === 1 ? event.place_1 : event.place_2;
	let guestList;
	let guestLists = event.guestLists;
	if (guestLists.length === 0) {
		guestList = <div>Canceled</div>;
	} else {
		guestList = guestLists.map((list, i) => {
			return getFullName(list.user, i);
		});
	}

	return (
		<div className="polaroid-details">
			<div className="polaroid-date">
				<Moment format="dddd, MMMM DD">
					{event.date}
				</Moment>
			</div>
			<div className="past-place-name">
				<a href={place.url} title="open in yelp" target="_blank">
					{place.name}
				</a>
			</div>
			<div>
				<img className="place-img" src={place.image_url} alt="restaurant" />
			</div>
			<span>
				<img
					className="yelp-rating"
					src={`../Images/small_${place.yelp_rating}.png`}
					alt="rating"
				/>
			</span>&nbsp;|&nbsp;
			<span>{place.address_street}</span>
			<div className="past-guests">
				<span className="bold">Guest Speaker:</span> {event.speaker}
				<br />
				<span className="bold">Guestlist:</span> {guestList}
			</div>
		</div>
	);
};

export default PastEvent;
