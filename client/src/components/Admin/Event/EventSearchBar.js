import React from "react";
import EventTableRow from "./EventTableRow";

const EventSearchBar = props => {
  let events = [];
  props.events.forEach(event => {
    if (event.winner === 1) {
      events.push(Object.assign({}, event, { place: event.place_1 }));
    } else if (event.winner === 2) {
      events.push(Object.assign({}, event, { place: event.place_2 }));
    } else {
      events.push(Object.assign({}, event, { place: { name: "" } }));
    }
  });
  let filtered = events.filter(event => {
    return (
      event.place.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !==
      -1
    );
  });
  let mappedFilter = filtered.map(event => (
    <EventTableRow
      updateSpeaker={props.updateSpeaker}
      event={event}
      key={event.id}
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
          <div className="table-row-item date">Date</div>
          <div className="table-row-item name">Place</div>
          <div className="table-row-item speaker">Guest Speaker</div>
          <div className="table-row-item upcoming">Upcoming</div>
        </div>
        {mappedFilter}
      </div>
    </div>
  );
};

export default EventSearchBar;
