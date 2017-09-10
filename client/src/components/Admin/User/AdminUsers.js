import React, { Component } from 'react';
import SearchBar from './AdminSearchBar';
import AdminUserModal from './AdminUserModal';
import AdminTable from './AdminTable';

const AdminUsers = props => {
	if (props.usersQuery.loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="admin-page">
			<p>Users</p>
			<div className="search_bar_wrapper">
				<button className="add_button" type="button" onClick={props.openModal}>
					+ user
				</button>
				<SearchBar
					updateSearchTerm={props.updateSearchTerm}
					users={props.usersQuery.users}
				/>
			</div>
			<br />
			<br />
			<div className={props.showModal ? 'openModal' : 'closeModal'}>
				<span id="x" onClick={props.closeModal}>
					&times;
				</span>
				<UserModal
					firstName={props.firstName}
					lastName={props.lastName}
					email={props.email}
					neighborhood={props.neighborhood}
					password={props.password}
					verifyPassword={props.verifyPassword}
					closeModal={props.closeModal}
				/>
			</div>
		</div>
	);
};
export default AdminUsers;
