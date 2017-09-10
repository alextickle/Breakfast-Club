import React from 'react';
import AdminUsersContainer from '../containers/Admin/AdminUsersContainer';
import AdminPlacesContainer from '../containers/Admin/AdminPlacesContainer';
import AdminEventsContainer from '../containers/Admin/AdminEventsContainer';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';

const AdminPage = props => {
	const pageAdmin = () => {
		if (props.userButton === 'admin_button_clicked') {
			return <AdminUsersContainer />;
		} else if (props.placeButton === 'admin_button_clicked') {
			return <AdminPlacesContainer />;
		} else if (props.eventButton === 'admin_button_clicked') {
			return <AdminEventsContainer />;
		} else {
			return '';
		}
	};

	return (
		<div className="wrapper">
			<SideBar />
			<div className="admin-page">
				<div className="nested">
					<SideBarMini />
					<Header />
					<h3>hello there, admin</h3>
					<div id="admin_button_wrapper">
						<button
							className={props.placeButton}
							type="button"
							onMouseOver={props.setActiveButton('placeButton')}
						>
							manage places
						</button>
						<button
							className={props.userButton}
							type="button"
							onMouseOver={() => props.setActiveButton('userButton')}
						>
							manage users
						</button>
						<button
							className={props.eventButton}
							type="button"
							onMouseOver={() => props.setActiveButton('eventButton')}
						>
							manage events
						</button>
					</div>
					<br />
					<br />
					<br />
					{pageAdmin()}
				</div>
			</div>
		</div>
	);
};
export default AdminPage;
