import React from 'react';

const PlaceListing = props =>
	<div className="outside">
		<ul className="list-background">
			<li className="image">
				<img src={props.place.image_url} />
			</li>

			<br />

			<li className="fields">
				WHERE: {props.place.name}
			</li>

			<li className="fields">
				WHAT KIND: {props.place.categories}
			</li>

			<li className="fields place-rating">
				DELICIOUSNESS:{' '}
				<img
					src={`../Images/small_${props.place.yelp_rating}.png`}
					alt="rating"
				/>
			</li>

			<li className="fields">
				HOW MUCH MOOLAH: {props.place.price}
			</li>

			<li className="fields">
				ADDRESS: {props.place.address_street}
			</li>

			<li className="fields">
				{props.place.address_city},
				{props.place.address_state}&nbsp;
				{props.place.address_zip}
			</li>

			<li className="fields">
				TEL: {props.place.phone}
			</li>
			<hr />
		</ul>
	</div>;

export default PlaceListing;
