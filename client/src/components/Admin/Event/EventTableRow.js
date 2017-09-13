import React, { Component } from "react";
import moment from "moment";

class EventTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      editIcon: "../Images/edit.png",
      readOnly: true,
      title: "edit",
      className: "read-only table-row"
    };
  }

  dateParser(date) {
    let newDate = moment(date).format("MMMM D, YYYY - h:mm a");
    return newDate;
  }

  handleMouseEnter(e) {
    this.setState({ editIcon: "../Images/hover-edit.png" });
  }

  handleMouseLeave(e) {
    this.setState({ editIcon: "../Images/edit.png" });
  }

  handleClick() {
    if (this.state.editIcon === "../Images/hover-edit.png") {
      this.setState({
        editIcon: "../Images/save.png",
        readOnly: false,
        title: "save",
        className: "editable table-row"
      });
      this.handleEdit.bind(this);
    } else if (this.state.editIcon === "../Images/save.png") {
      this.setState({
        editIcon: "../Images/edit.png",
        readOnly: true,
        title: "edit",
        className: "read-only table-row"
      });
      this.props.updateSpeaker(this.props.event.id, this.state.event.speaker);
    }
  }

  handleEdit(e) {
    let target = e.nativeEvent.target;
    let temp = {};
    temp[target.name] = target.value;
    this.setState({ event: Object.assign({}, this.state.event, temp) });
  }

  editIcon() {
    return (
      <img
        id="edit_icon"
        src={this.state.editIcon}
        alt="edit"
        title={this.state.title}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className={this.state.className}>
        <div className="table-row-item date">
          <input
            size="40"
            name="date"
            value={this.dateParser(this.state.event.date)}
            disabled={true}
          />
        </div>
        <div className="table-row-item name">
          <input
            name="place.name"
            value={this.state.event.place.name || "TBD"}
            disabled={true}
            size="30"
          />
        </div>
        <div className="table-row-item speaker">
          <input
            name="speaker"
            value={this.state.event.speaker || ""}
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
            size="20"
          />
        </div>
        <div className="table-row-item upcoming">
          <input
            name="active"
            value={this.state.event.active}
            disabled={true}
            size="7"
          />
        </div>
        <div className="icon table-row-item">{this.editIcon()}</div>
      </div>
    );
  }
}

export default EventTableRow;
