import React from "react";
import PlaceTableRow from "./PlaceTableRow";

const PlaceSearchBar = props => {
  console.log(props.searchTerm);
  let filtered = props.places.filter(place => {
    console.log(place.name.toLowerCase());
    return (
      place.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1 ||
      place.yelp_rating.toString().indexOf(props.searchTerm.toLowerCase()) !==
        -1 ||
      place.price.indexOf(props.searchTerm) !== -1 ||
      place.address_street
        .toLowerCase()
        .indexOf(props.searchTerm.toLowerCase()) !== -1 ||
      place.phone.toString().indexOf(props.searchTerm.toLowerCase()) !== -1 ||
      place.active.toString().indexOf(props.searchTerm.toLowerCase()) !== -1
    );
  });
  let mappedFilter = filtered.map(place => (
    <PlaceTableRow place={place} key={place.id} />
  ));

  return (
    <div className="search-bar-input">
      <input
        id="search-bar"
        size="72"
        type="search"
        placeholder="Search"
        value={props.searchTerm}
        onChange={e => props.updateSearchTerm(e.target.value)}
      />
      <br />
      <br />
      <div className="table">
        <div className="table-row table-header">
          <div className="table-row-item firstName">First Name</div>
          <div className="table-row-item lastName">Last Name</div>
          <div className="table-row-item email">Email Address</div>
          <div className="table-row-item neighborhood">Neighborhood</div>
          <div className="table-row-item admin">Admin</div>
          <div className="table-row-item active">Active</div>
          <div className="table-row-item hidden" />
          <div className="table-row-item hidden" />
        </div>
        {mappedFilter}
      </div>
    </div>
  );
};

export default PlaceSearchBar;
