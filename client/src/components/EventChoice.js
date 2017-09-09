import React, { Component } from 'react';

const EventChoice = props =>
	<div>
		<div className="place-name">
			<a href={props.place.url} title="open in yelp" target="_blank">
				{props.place.name}
			</a>
		</div>
		<div
			className="place"
			onClick={e =>
				props.registerVote(props.user.id, props.event.id, props.choice)}
		>
			<img className="place-img" src={props.place.image_url} alt="restaurant" />
			<div className="after">
				<div className="vote">VOTE</div>
			</div>
		</div>
		<div className="place-details">
			<img
				className="yelp-rating"
				src={`../Images/small_${props.place.yelp_rating}.png`}
				alt="rating"
			/>
			{props.place.review_count} Reviews&nbsp;|&nbsp;
			{props.place.price}
			&nbsp;|&nbsp;
			{props.place.categories}
		</div>
		<div className="place-details">
			{props.place.address_street}, {props.place.address_city}
			&nbsp;{props.place.address_zip}
		</div>
	</div>;

export default EventChoice;
