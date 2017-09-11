import React from 'react';
import UserTableRow from './UserTableRow';

const UserSearchBar = props => {
	let filtered = props.users.filter(user => {
		return (
			user.firstName.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !==
				-1 ||
			user.lastName.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !==
				-1 ||
			user.email.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1 ||
			user.neighborhood
				.toLowerCase()
				.indexOf(props.searchTerm.toLowerCase()) !== -1 ||
			user.admin.toString().indexOf(props.searchTerm.toLowerCase()) !== -1 ||
			user.active.toString().indexOf(props.searchTerm.toLowerCase()) !== -1
		);
	});
	let mappedFilter = filtered.map(user => {
		return <UserTableRow user={user} key={user.id} />;
	});

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

export default UserSearchBar;
