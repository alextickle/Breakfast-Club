import React, { Component } from 'react';

class EventDetail extends Component {
  render() {
    console.log(this.props.data)
    var mappedUsers = this.props.data.users.map(function(user, i){
      console.log(user)
      return (
        <div key={i}>
          <p>{user.firstName + " " + user.lastName}</p>
          <p>{user.email}</p>
        </div>
      )
    })

    return (
      <div>
        <div>
          <h1>Event Data</h1>
          <p>Date: {this.props.data.event.date}</p>
        </div>
        <div>
          <p>Choice 1</p>
          <h4>{this.props.data.places[0].name}</h4>
          <p>Choice 2</p>
          <h4>{this.props.data.places[1].name}</h4>
        </div>
        <div>
          <h4>Attendees</h4>
          {mappedUsers}
        </div>
      </div>
    );
  }
}

export default EventDetail;