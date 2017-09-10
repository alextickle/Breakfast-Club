import React, { Component } from 'react';

const UserModal = props =>
	<div>
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
				props.addUser();
				props.closeModal();
			}}
		>
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
						value={props.lastName}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="email address"
						type="email"
						name="email"
						id="email"
						value={props.email}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="neighborhood"
						type="text"
						name="neighborhood"
						id="neighborhood"
						value={props.neighborhood}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="password"
						type="password"
						name="password"
						id="password"
						value={props.password}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="reenter password"
						type="password"
						name="verifyPassword"
						id="verifyPassword"
						value={props.verifyPassword}
						onChange={props.updateFieldValue}
					/>
				</div>
			</div>
			<div>
				<input className="submit-button" type="submit" value="submission" />
			</div>
		</form>
	</div>;

export default UserModal;
