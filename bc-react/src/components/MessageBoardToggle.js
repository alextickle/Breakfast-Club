import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import { toggleMessageBoard } from '../actions';
import ToggleDisplay from 'react-toggle-display';

const MessageBoardToggle = props => {
	console.log(props);
	return (
		<div>
			<div className="sticky" onClick={() => toggleMessageBoard()}>
				message board
			</div>
			<ToggleDisplay show={props.showMessageBoard}>
				<MessageBoard messages={props.data.messages} />
			</ToggleDisplay>
		</div>
	);
};

export default MessageBoardToggle;
