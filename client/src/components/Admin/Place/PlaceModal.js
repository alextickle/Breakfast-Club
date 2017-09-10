import React, { Component } from 'react';

const PlaceModal = props =>
	<div>
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
				props.addPlace();
				props.closeModal();
			}}
		>
			<div className="add-fields">
				<div>
					<input
						placeholder="Restaurant"
						type="text"
						name="name"
						id="name"
						value={props.name}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Stars"
						type="text"
						name="yelp_rating"
						id="yelp_rating"
						value={this.state.place.yelp_rating}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Category"
						type="text"
						name="categories"
						id="categories"
						value={this.state.place.categories}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Price"
						type="text"
						name="price"
						id="price"
						value={this.state.place.price}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Street Address"
						type="text"
						name="address_street"
						id="address_street"
						value={this.state.place.address_street}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Phone Number"
						type="text"
						name="phone"
						id="phone"
						value={this.state.place.phone}
						onChange={props.updateFieldValue}
					/>
				</div>
			</div>
			<div>
				<input className="submit-button" type="submit" value="submission" />
			</div>
		</form>
	</div>;

export default PlaceModal;
