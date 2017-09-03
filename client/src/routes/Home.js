import React from 'react';
import SideBarContainer from '../containers/SideBarContainer';
import CalendarContainer from '../containers/CalendarContainer';
import SideBarMiniContainer from '../containers/SideBarMiniContainer';
import Reminder from '../components/Reminder';
import Header from '../components/Header';
// import Calendar from '../components/Calendar';

const Home = props => {
	if (props.userQuery.loading || props.currentEventQuery.loading) {
		return <h1>Loading</h1>;
	}
	return (
		<div className="wrapper">
			{/* //this is the flex container */}
			{<SideBarContainer />}
			{/* //this is a flex item  with a nested flex container */}
			<div className="home-page">
				{/* //this is a flex item */}
				<div className="nested">
					{/* //this is a nested flex container */}
					{<SideBarMiniContainer />}/
					<Header />
					<div className="welcome-message">
						<div className="reminder">
							<Reminder
								user={props.userQuery.user}
								event={props.currentEventQuery.currentEvent}
							/>
						</div>
					</div>
					<CalendarContainer event={props.currentEventQuery.currentEvent} />
				</div>
			</div>
			<img
				className="fruit-border"
				src="../Images/fruit-border.jpg"
				alt="fruit"
			/>
		</div>
	);
};

export default Home;
