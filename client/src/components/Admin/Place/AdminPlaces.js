import React from 'react';
import PlaceSearchBar from './PlaceSearchBar';
import PlaceModal from './PlaceModal';

const AdminPlaces = props => {
	if (props.places.loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="admin-page">
			<p>Places</p>
			<div className="search_bar_wrapper">
				<button className="add_button" type="button" onClick={props.openModal}>
					+ place
				</button>
				<PlaceSearchBar
					updateSearchTerm={props.updateSearchTerm}
					places={props.placesQuery.places}
				/>
			</div>
			<br />
			<br />
			<div className={props.showModal ? 'openModal' : 'closeModal'}>
				<span id="x" onClick={props.closeModal}>
					&times;
				</span>
				<PlaceModal
					name={props.name}
					yelp_rating={props.yelp_rating}
					categories={props.categories}
					price={props.price}
					address_street={props.address_street}
					phone={props.phone}
					closeModal={props.closeModal}
					addPlace={props.addPlace}
				/>
			</div>
		</div>
	);
};
export default AdminPlaces;
