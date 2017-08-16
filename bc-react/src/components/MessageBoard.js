import React, { Component } from 'react';
import Moment from 'react-moment';
import { helpers } from '../helpers/moment.js';
// import MessageSubmitContainer from '../containers/MessageSubmitContainer';

const MessageBoard = props => {
	let mapped;
	if (props.loading) {
		return <p>Loading ...</p>;
	} else {
		mapped = props.messages.map(function(message, i) {
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
	}

	return (
		<div className="message-board">
			<div className="message-box">
				{mapped}
			</div>
		</div>
	);
};

export default MessageBoard;
