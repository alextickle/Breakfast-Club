//Places passes props to PlaceListing

import React from 'react';
import Header from '../components/Header';
import PlaceListing from '../components/PlaceListing';
import placeStore from '../stores/PlaceStore';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import { fetchPlaces } from '../actions/PlaceActions';

const Places = props => {
	const renderPlaces = () => {
		let placeRender = [];
		for (var i = 0; i < props.places.length; i++) {
			let placeId = 'place-' + i;
			placeRender.push(<PlaceListing key={placeId} place={props.places[i]} />);
		}
		return placeRender;
	};
	return (
		<div className="wrapper">
			{/* //this is the flex container */}
			<SideBar />
			{/* //this is a flex item  with a nested flex container */}
			<div className="places-page">
				{/* //this is a flex item */}
				<div className="nested">
					{/* //this is a nested flex container */}
					<SideBarMini />
					<Header />
					<div>
						<h2>Place List</h2>
						<div className="place-list">
							{renderPlaces()}
						</div>
					</div>
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

export default Places;
