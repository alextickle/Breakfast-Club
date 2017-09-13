import React from "react";
import PlaceTableRow from "./PlaceTableRow";

const PlaceSearchBar = props => {
  let filtered = props.places.filter(place => {
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
    <PlaceTableRow
      updatePlace={props.updatePlace}
      delete={props.delete}
      place={place}
      key={place.id}
    />
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
          <div className="table-row-item name">Name</div>
          <div className="table-row-item yelp">Stars</div>
          <div className="table-row-item price">Price</div>
          <div className="table-row-item street">Steet Address</div>
          <div className="table-row-item phone">Phone</div>
          <div className="table-row-item active">Active</div>
        </div>
        {mappedFilter}
      </div>
    </div>
  );
};

export default PlaceSearchBar;
