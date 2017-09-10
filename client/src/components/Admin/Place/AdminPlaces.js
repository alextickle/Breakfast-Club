import React, from 'react';
import SearchBar from './PlaceSearchBar';
import PlaceModal from './PlaceModal';
import PlaceTableRow from './PlaceTableRow';

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
				<SearchBar
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
export default AdminPlaces;
