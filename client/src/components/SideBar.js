import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = props =>
	<div className="sidebar">
		<div className="nested">
			{props.userEmail === 'breakfastclub.sd@gmail.com' &&
				<Link to="/admin" className="item wobble">
					{' '}<img src="../Images/admin.png" alt="admin" />
					<div className="admin">admin</div>
				</Link>}
			{props.userEmail !== 'breakfastclub.sd@gmail.com' &&
				<Link to="/profile" className="item wobble">
					{' '}<img src="../Images/user.png" alt="profile" />
					<div className="caption">profile</div>
				</Link>}
			<Link to="/home" className="item wobble">
				<img src="../Images/calendar.png" alt="calendar" />
				<div className="caption">calendar</div>
			</Link>
			<Link to="/places" className="item wobble">
				<img src="../Images/places.png" alt="places" />
				<div className="caption">places</div>
			</Link>
			<Link to="/photos" className="item wobble">
				<img src="../Images/camera.png" alt="photos" />
				<div className="caption">photos</div>
			</Link>
			<div className="item wobble" onClick={props.logout}>
				<img src="../Images/logout-img.png" alt="log out" />
				<div className="caption">log out</div>
			</div>
		</div>
	</div>;

export default SideBar;
