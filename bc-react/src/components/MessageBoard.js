import React, { Component } from 'react';
import Moment from 'react-moment';
import { helpers } from '../helpers/moment.js';
import { updateCurrentMessage } from '../actions';
// import MessageSubmitContainer from '../containers/MessageSubmitContainer';

class MessageBoard extends Component {
	handleChange(e) {
		let currentMessage = e.target.value;
		updateCurrentMessage(currentMessage);
	}

	render() {
		let mapped = this.props.messages.map(function(message, i) {
			let timeStamp = message.createdAt;
			return (
				<div className="individual-message" key={i}>
					<div className="sender">
						{message.author}
					</div>
					<div className="time-stamp">
						<Moment fromNow>
							{helpers.syncToServerTime(timeStamp)}
						</Moment>
					</div>
					<div className="message-content">
						{message.content}
					</div>
				</div>
			);
		});

		return (
			<div className="message-board">
				<div className="message-box">{mapped.reverse()}</div>
				MessageSubmitContainer
				<div />
			</div>
		);
	}
}

export default MessageBoard;
