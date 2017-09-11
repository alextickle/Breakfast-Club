import React from 'react';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import Input from '../components/Input';
import AdminKey from '../components/Admin/AdminKey';

const UserProfile = props => {
	if (props.data.loading) {
		return <h1>Loading...</h1>;
	}

	const handleClick = () => {
		if (props.editIcon === '../Images/hover-edit.png') {
			props.setSaveState({
				editIcon: '../Images/save.png',
				readOnly: false,
				title: 'save',
				className: 'editable',
				header: 'Save Profile'
			});
		} else if (props.editIcon === '../Images/save.png') {
			props.setSaveState({
				editIcon: '../Images/edit.png',
				readOnly: true,
				title: 'edit',
				className: 'read-only',
				header: 'Edit Profile'
			});
			props.updateUser({
				firstName: props.firstName,
				lastName: props.lastName,
				email: props.email,
				neighborhood: props.neighborhood
			});
		} else {
			return '';
		}
	};

	const handleDeactivate = e => {
		if (window.confirm('You really wanna leave us?')) {
			props.deactivateUser(props.userEmail);
			props.logout();
		}
	};

	return (
		<div className="wrapper">
			<SideBar />
			<div className="profile-page">
				<div className="nested">
					<Header />
					<SideBarMini />
					<div className="welcome-user">
						Welcome, {props.firstName || props.data.user.firstName}
					</div>
					<div className="edit-wrapper">
						<div className="edit">
							<Input size="10" disabled="true" value={props.header} />
						</div>
						<div className="edit-icon">
							<img
								id="edit_icon"
								src={props.editIcon}
								alt="edit"
								title={props.title}
								onMouseEnter={e =>
									e.target.id === 'edit_icon' &&
									props.editIcon === '../Images/edit.png'
										? props.setEditIconLink('../Images/hover-edit.png')
										: ''}
								onMouseLeave={e =>
									e.target.id === 'edit_icon' &&
									props.editIcon === '../Images/hover-edit.png'
										? props.setEditIconLink('../Images/edit.png')
										: ''}
								onClick={handleClick}
							/>
							}
						</div>
					</div>
					<table className="profile-table">
						<tbody>
							<tr>
								<td className="field">First Name:</td>
								<td>
									<input
										className={props.className}
										name="firstName"
										type="text"
										disabled={props.readOnly}
										value={props.firstName || props.data.user.firstName}
										onChange={props.updateUserData}
									/>
								</td>
							</tr>
							<tr>
								<td className="field">Last Name:</td>
								<td>
									<input
										className={props.className}
										name="lastName"
										type="text"
										disabled={props.readOnly}
										value={props.lastName || props.data.user.lastName}
										onChange={props.updateUserData}
									/>
								</td>
							</tr>
							<tr>
								<td className="field">Email Address:</td>
								<td>
									<input
										className={props.className}
										size="30"
										type="email"
										name="email"
										disabled={props.readOnly}
										value={props.email || props.data.user.email}
										onChange={props.updateUserData}
									/>
								</td>
							</tr>
							<tr>
								<td className="field">Neighborhood:</td>
								<td>
									<input
										type="text"
										className={props.className}
										name="neighborhood"
										disabled={props.readOnly}
										value={props.neighborhood || props.data.user.neighborhood}
										onChange={props.updateUserData}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<p className="delete" onClick={handleDeactivate} id="active">
						deactivate my account
					</p>
				</div>
			</div>
			<img
				className="fruit-border"
				src="../Images/fruit-border.jpg"
				alt="fruit"
			/>
			{props.data.user.admin &&
				props.data.user.email !== 'breakfastclub.sd@gmail.com' &&
				<AdminKey />}
		</div>
	);
};

export default UserProfile;
