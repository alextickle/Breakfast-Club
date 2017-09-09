//PlaceListing gets props from Places

import React, { Component } from 'react';

class PlaceListing extends Component {
	render() {
		return (
			<div className="outside">
				<ul className="list-background">
					<li className="image">
						<img src={this.props.place.image_url} />
					</li>

					<br />

					<li className="fields">
						WHERE: {this.props.place.name}
					</li>

					<li className="fields">
						WHAT KIND: {this.props.place.categories}
					</li>

					<li className="fields place-rating">
						DELICIOUSNESS:{' '}
						<img
							src={`../Images/small_${this.props.place.yelp_rating}.png`}
							alt="rating"
						/>
					</li>

					<li className="fields">
						HOW MUCH MOOLAH: {this.props.place.price}
					</li>

					<li className="fields">
						ADDRESS: {this.props.place.address_street}
					</li>

					<li className="fields">
						{this.props.place.address_city},
						{this.props.place.address_state}&nbsp;
						{this.props.place.address_zip}
					</li>

					<li className="fields">
						TEL: {this.props.place.phone}
					</li>
					<hr />
				</ul>
			</div>
		);
	}
}

export default PlaceListing;
