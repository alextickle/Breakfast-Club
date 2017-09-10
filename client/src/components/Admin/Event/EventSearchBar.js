import React from 'react';
import EventTableRow from './EventTableRow';

const EventSearchBar = props => {
	let filtered = props.events.filter(event => {
		return (
			event.place.name
				.toLowerCase()
				.indexOf(this.state.searchTerm.toLowerCase()) !== -1
		);
	});
	let mappedFilter = filtered.map(event =>
		<EventTableRow event={event} key={event.id} />
	);

	return (
		<div className="search-bar-input">
			<input
				id="search-bar"
				size="72"
				type="search"
				placeholder="Search"
				value={props.searchTerm}
				onChange={e => props.updateSearchTerm(e.target.value)}
			/>
			<br />
			<br />
			<div className="table">
				<div className="table-row table-header">
					<div className="table-row-item firstName">First Name</div>
					<div className="table-row-item lastName">Last Name</div>
					<div className="table-row-item email">Email Address</div>
					<div className="table-row-item neighborhood">Neighborhood</div>
					<div className="table-row-item admin">Admin</div>
					<div className="table-row-item active">Active</div>
					<div className="table-row-item hidden" />
					<div className="table-row-item hidden" />
				</div>
				{mappedFilter}
			</div>
		</div>
	);
};

export default PlaceSearchBar;
