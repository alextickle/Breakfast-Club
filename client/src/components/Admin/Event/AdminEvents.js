import React from "react";
import EventSearchBar from "./EventSearchBar";

const AdminEvents = props => {
  if (props.data.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="admin-page">
      <p>Events</p>
      <div className="search_bar_wrapper">
        <EventSearchBar
          searchTerm={props.searchTerm}
          updateSearchTerm={props.updateSearchTerm}
          events={props.data.events}
          updateSpeaker={props.updateSpeaker}
        />
      </div>
      <br />
      <br />
    </div>
  );
};
export default AdminEvents;
