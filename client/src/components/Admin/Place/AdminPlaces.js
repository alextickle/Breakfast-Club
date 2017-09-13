import React from "react";
import PlaceSearchBar from "./PlaceSearchBar";
import PlaceModal from "./PlaceModal";

const AdminPlaces = props => {
  if (props.data.loading) {
    return <h1>Loading...</h1>;
  }
  console.log("adminPlaces props: ", props);
  return (
    <div className="admin-page">
      <p>Places</p>
      <div className="search_bar_wrapper">
        <button className="add_button" type="button" onClick={props.openModal}>
          + place
        </button>
        <PlaceSearchBar
          searchTerm={props.searchTerm}
          updateSearchTerm={props.updateSearchTerm}
          places={props.data.places}
        />
      </div>
      <br />
      <br />
      <div className={props.showModal ? "openModal" : "closeModal"}>
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
