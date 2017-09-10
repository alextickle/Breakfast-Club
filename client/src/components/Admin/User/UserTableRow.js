import React, { Component } from 'react';

class UserTableRow extends Component {
	constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      deleteIcon: '../Images/delete.png',
      editIcon: '../Images/edit.png',
      readOnly: true,
      title: 'edit',
      className: 'read-only table-row'
    }
  }

	handleMouseEnter(e) {
		if (
			e.target.id === 'delete_icon' &&
			this.state.deleteIcon === '../Images/delete.png'
		) {
			this.setState({ deleteIcon: '../Images/hover-delete.png' });
		} else if (
			e.target.id === 'edit_icon' &&
			this.state.editIcon === '../Images/edit.png'
		) {
			this.setState({ editIcon: '../Images/hover-edit.png' });
		} else {
			return '';
		}
	}

	handleMouseLeave(e) {
		if (
			e.target.id === 'delete_icon' &&
			this.state.deleteIcon === '../Images/hover-delete.png'
		) {
			this.setState({ deleteIcon: '../Images/delete.png' });
		} else if (
			e.target.id === 'edit_icon' &&
			this.state.editIcon === '../Images/hover-edit.png'
		) {
			this.setState({ editIcon: '../Images/edit.png' });
		} else {
			return '';
		}
	}

	handleClick() {
		if (this.state.editIcon === '../Images/hover-edit.png') {
			this.setState({
				editIcon: '../Images/save.png',
				readOnly: false,
				title: 'save',
				className: 'editable table-row'
			});
			this.handleEdit.bind(this);
		} else if (this.state.editIcon === '../Images/save.png') {
			this.setState({
				editIcon: '../Images/edit.png',
				readOnly: true,
				title: 'edit',
				className: 'read-only table-row'
			});
			props.updateUser(props.user);
		} else if (this.state.deleteIcon === '../Images/hover-delete.png') {
			if (
				window.confirm(
					"Hold up! Deleting will also delete any linked places, events or users. Consider deactivating instead. Click 'OK' to delete, 'Cancel' to cancel"
				)
			) {
				props.delete(this.state.user.id);
			}
		}
	}

	handleEdit(e) {
		let target = e.nativeEvent.target;
		let user = this.state.user;
			user[target.name] = target.value;
			this.setState({ user: user });
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
					<div className="table-row-item firstName">
						<input
							name="firstName"
							value={this.state.user.firstName}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="9"
						/>
					</div>
					<div className="table-row-item lastName">
						<input
							name="lastName"
							value={this.state.user.lastName}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="11"
						/>
					</div>
					<div className="table-row-item email">
						<input
							name="email"
							value={this.state.user.email}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="30"
						/>
					</div>
					<div className="table-row-item neighborhood">
						<input
							name="neighborhood"
							value={this.state.user.neighborhood}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="17"
						/>
					</div>
					<div className="table-row-item admin">
						<input
							name="admin"
							value={this.state.user.admin}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="7"
						/>
					</div>
					<div className="table-row-item active">
						<input
							name="active"
							value={this.state.user.active}
							onChange={this.handleEdit.bind(this)}
							disabled={this.state.readOnly}
							size="7"
						/>
					</div>
					<div className="table-row-item icon">
						{this.deleteIcon()}
					</div>
					<div className="table-row-item icon">
						{this.editIcon()}
					</div>
				</div>
			);
		}
	}
}

export default UserTableRow;
