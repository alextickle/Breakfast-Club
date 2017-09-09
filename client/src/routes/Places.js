import Header from '../components/Header';
import React from 'react';
import PlaceListing from '../components/PlaceListing';
import SideBarContainer from '../containers/SideBarContainer';
import SideBarMiniContainer from '../containers/SideBarMiniContainer';

const Places = props => {
	if (props.data.loading) {
		return <h1>Loading</h1>;
	}
	let places = props.data.places;
	const renderPlaces = () => {
		let placeRender = [];
		for (var i = 0; i < places.length; i++) {
			let placeId = 'place-' + i;
			placeRender.push(<PlaceListing key={placeId} place={places[i]} />);
		}
		return placeRender;
	};
	return (
		<div className="wrapper">
			<SideBarContainer />
			<div className="places-page">
				<div className="nested">
					<SideBarMiniContainer />
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
