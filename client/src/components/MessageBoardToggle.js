import React from 'react';
import MessageBoard from './MessageBoard';
import ToggleDisplay from 'react-toggle-display';

const MessageBoardToggle = props => {
	return (
		<div>
			<div className="sticky" onClick={() => props.toggleMessageBoard()}>
				message board
			</div>
			<ToggleDisplay show={props.showMessageBoard}>
				<MessageBoard
					messages={props.data.messages}
					loading={props.data.loading}
					mutate={props.mutate}
					user={props.user}
				/>
			</ToggleDisplay>
		</div>
	);
};

export default MessageBoardToggle;
