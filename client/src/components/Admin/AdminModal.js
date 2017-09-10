import React, { Component } from 'react';

class AdminModal extends Component {
	handleChange(e) {
		let target = e.target;
		let item;
		if (this.props.userForm) {
			item = this.state.user;
			item[target.name] = target.value;
			this.setState({ user: item });
		} else if (this.props.placeForm) {
			item = this.state.place;
			item[target.name] = target.value;
			this.setState({ place: item });
		} else if (this.props.eventForm) {
			item = this.state.event;
			item[target.name] = target.value;
			this.setState({ event: item });
		}
	}

	// addUser and updateUsers are asynchronous because they're in the store
	handleSubmit(e) {
		e.preventDefault();

		if (this.props.userForm) {
			adminAddUser(this.state);
		} else if (this.props.placeForm) {
			adminAddPlace(this.state);
		} else if (this.props.eventForm) {
			adminAddEvent(this.state);
		} else {
			<div />;
		}
		this.props.closeModal({ className: 'closeModal' });
	}

	userFields() {
		return (
			<div className="add-fields">
				<div>
					<input
						placeholder="first name"
						type="text"
						name="firstName"
						id="firstName"
						value={props.firstName}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="last name"
						type="text"
						name="lastName"
						id="lastName"
						value={this.state.user.lastName}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="email address"
						type="email"
						name="email"
						id="email"
						value={this.state.user.email}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="neighborhood"
						type="text"
						name="neighborhood"
						id="neighborhood"
						value={this.state.user.neighborhood}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="password"
						type="password"
						name="password"
						id="password"
						value={this.state.user.password}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="reenter password"
						type="password"
						name="verifyPassword"
						id="verifyPassword"
						value={this.state.user.verifyPassword}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
			</div>
		);
	} //

	placeFields() {
		return (
			<div className="add-fields">
				<div>
					<input
						placeholder="Restaurant"
						type="text"
						name="name"
						id="name"
						value={this.state.place.name}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Stars"
						type="text"
						name="yelp_rating"
						id="yelp_rating"
						value={this.state.place.yelp_rating}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Category"
						type="text"
						name="categories"
						id="categories"
						value={this.state.place.categories}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Price"
						type="text"
						name="price"
						id="price"
						value={this.state.place.price}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Street Address"
						type="text"
						name="address_street"
						id="address_street"
						value={this.state.place.address_street}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Phone Number"
						type="text"
						name="phone"
						id="phone"
						value={this.state.place.phone}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
			</div>
		);
	}

	eventFields() {
		return (
			<div className="add-fields">
				<div>
					<input
						placeholder="Date"
						type="date"
						name="date"
						id="date"
						value={this.state.event.date}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Place ID #"
						type="text"
						name="place_1_id"
						id="place_1_id"
						size="22"
						value={this.state.event.place_1_id}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div>
					<input
						placeholder="Guest of Honor"
						type="text"
						name="speaker"
						id="speaker"
						size="22"
						value={this.state.event.speaker}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
			</div>
		);
	}

	render() {
		let fields;
		if (this.props.userForm) {
			fields = this.userFields();
		} else if (this.props.placeForm) {
			fields = this.placeFields();
		} else if (this.props.eventForm) {
			fields = this.eventFields();
		}

		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit.bind(this)}>
					{fields}
					<div>
						<input className="submit-button" type="submit" value="submission" />
					</div>
				</form>
			</div>
		);
	}
}
export default AdminModal;
