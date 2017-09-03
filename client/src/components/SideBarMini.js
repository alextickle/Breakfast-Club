import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMini = props =>
	<div className="mini-sidebar">
		{props.userEmail === 'breakfastclub.sd@gmail.com' &&
			<Link to="/admin" className="item wobble">
				<img src="../Images/admin.png" alt="admin" title="admin" />
			</Link>}
		{props.userEmail !== 'breakfastclub.sd@gmail.com' &&
			<Link to="/profile" className="item wobble">
				<img src="../Images/user.png" alt="profile" title="profile" />
			</Link>}
		<Link to="/home" className="item wobble">
			<img src="../Images/calendar.png" alt="calendar" title="calendar" />
		</Link>
		<Link to="/places" className="item wobble">
			<img src="../Images/places.png" alt="places" title="places" />
		</Link>
		<Link to="/photos" className="item wobble">
			<img src="../Images/camera.png" alt="photos" title="photos" />
		</Link>
		<div className="item wobble" onClick={props.logout}>
			<img src="../Images/logout-img.png" alt="log out" title="log out" />
		</div>
	</div>;

export default SideBarMini;
