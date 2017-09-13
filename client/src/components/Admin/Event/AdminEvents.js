import React from "react";
import EventSearchBar from "./EventSearchBar";
import EventModal from "./EventModal";

const AdminEvents = props => {
  if (props.data.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="admin-page">
      <p>Events</p>
      <div className="search_bar_wrapper">
        <button className="add_button" type="button" onClick={props.openModal}>
          + event
        </button>
        <EventSearchBar
          searchTerm={props.searchTerm}
          updateSearchTerm={props.updateSearchTerm}
          events={props.data.events}
          updateSpeaker={props.updateSpeaker}
        />
      </div>
      <br />
      <br />
      <div className={props.showModal ? "openModal" : "closeModal"}>
        <span id="x" onClick={props.closeModal}>
          &times;
        </span>
        <EventModal
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
export default AdminEvents;
