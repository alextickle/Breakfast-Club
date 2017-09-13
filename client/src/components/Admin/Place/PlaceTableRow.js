import React, { Component } from "react";

class PlaceTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: this.props.place,
      deleteIcon: "../Images/delete.png",
      editIcon: "../Images/edit.png",
      readOnly: true,
      title: "edit",
      className: "read-only table-row"
    };
  }

  handleMouseEnter(e) {
    if (
      e.target.id === "delete_icon" &&
      this.state.deleteIcon === "../Images/delete.png"
    ) {
      this.setState({ deleteIcon: "../Images/hover-delete.png" });
    } else if (
      e.target.id === "edit_icon" &&
      this.state.editIcon === "../Images/edit.png"
    ) {
      this.setState({ editIcon: "../Images/hover-edit.png" });
    } else {
      return "";
    }
  }

  handleMouseLeave(e) {
    if (
      e.target.id === "delete_icon" &&
      this.state.deleteIcon === "../Images/hover-delete.png"
    ) {
      this.setState({ deleteIcon: "../Images/delete.png" });
    } else if (
      e.target.id === "edit_icon" &&
      this.state.editIcon === "../Images/hover-edit.png"
    ) {
      this.setState({ editIcon: "../Images/edit.png" });
    } else {
      return "";
    }
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
      this.props.updatePlace(this.props.place);
    } else if (this.state.deleteIcon === "../Images/hover-delete.png") {
      if (
        window.confirm(
          "Hold up! Deleting will also delete any linked events or users. Consider deactivating instead. Click 'OK' to delete, 'Cancel' to cancel"
        )
      ) {
        this.props.delete(this.state.place.id);
      }
    }
  }

  handleEdit(e) {
    let target = e.nativeEvent.target;
    let temp = {};
    temp[target.name] = target.value;
    this.setState({ place: Object.assign({}, this.state.place, temp) });
  }

  deleteIcon() {
    return (
      <img
        id="delete_icon"
        src={this.state.deleteIcon}
        alt="delete"
        title="delete"
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)}
      />
    );
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
        <div className="table-row-item name">
          <input
            name="name"
            value={this.state.place.name}
            size="30"
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
          />
        </div>
        <div className="table-row-item yelp">
          <input
            name="yelp_rating"
            value={this.state.place.yelp_rating}
            size="3"
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
          />
        </div>
        <div className="table-row-item price">
          <input
            name="price"
            value={this.state.place.price}
            size="3"
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
          />
        </div>
        <div className="table-row-item street">
          <input
            name="address_street"
            value={this.state.place.address_street}
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
          />
        </div>
        <div className="table-row-item phone">
          <input
            name="phone"
            value={this.state.place.phone}
            size="15"
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
          />
        </div>
        <div className="table-row-item active">
          <input
            name="active"
            value={this.state.place.active}
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly}
            size="7"
          />
        </div>
        <div className="icon table-row-item">{this.deleteIcon()}</div>
        <div className="icon table-row-item">{this.editIcon()}</div>
      </div>
    );
  }
}

export default PlaceTableRow;
