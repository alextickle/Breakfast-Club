import React, { Component } from "react";
import EventDetail from "../components/EventDetail";
import SideBar from "../components/SideBar";
import SideBarMini from "../components/SideBarMini";
import Header from "../components/Header";
import Moment from "react-moment";
import "moment-timezone";

class CurrentEvent extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* //this is the flex container */}
        <SideBar />
        {/* //this is a flex item  with a nested flex container */}
        <div className="event-page">
          {/* //this is a flex item */}
          <div className="nested">
            {/* //this is a nested flex container */}
            <Header />
            <SideBarMini />
            <div className="event-date">
              {/* this is the formatted date of the event */}
              <Moment format="dddd, MMMM DD @ h:mm A">
                {this.props.data.event.date}
              </Moment>
            </div>
            <EventDetail event={this.props.event} user={this.props.user} />
          </div>
        </div>
        <img
          className="fruit-border"
          src="../Images/fruit-border.jpg"
          alt="fruit"
        />
      </div>
    );
  }
}
export default CurrentEvent;
