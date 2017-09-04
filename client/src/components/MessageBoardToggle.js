import React from 'react';
import MessageBoard from './MessageBoard';
import ToggleDisplay from 'react-toggle-display';

const MessageBoardToggle = props => {
	if (props.userQuery.loading || props.messagesQuery.loading) {
		return <div />;
	}
	return (
		<div>
			<div className="sticky" onClick={() => props.toggleMessageBoard()}>
				message board
			</div>
			<ToggleDisplay show={props.showMessageBoard}>
				<MessageBoard
					messages={props.messagesQuery.messages}
					mutate={props.mutate}
					user={props.userQuery.user}
				/>
			</ToggleDisplay>
		</div>
	);
};

export default MessageBoardToggle;
