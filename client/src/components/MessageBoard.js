import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import messagesQuery from '../queries/messagesQuery';

const MessageBoard = props => {
	const syncToServerTime = input_date => moment(input_date).format();

	let mapped = props.messages.map(function(message, i) {
		let timeStamp = message.createdAt;
		return (
			<div className="individual-message" key={i}>
				<div className="sender">
					{props.user.firstName}
				</div>
				<div className="time-stamp">
					<Moment fromNow>
						{syncToServerTime(timeStamp)}
					</Moment>
				</div>
				<div className="message-content">
					{message.content}
				</div>
			</div>
		);
	});

	const handleSubmit = e => {
		e.preventDefault();
		props.mutate({
			variables: {
				content: this.input.value,
				user_id: props.user.id
			},
			update: (store, { data: { addMessage } }) => {
				// Read data from cache for this query.
				const data = store.readQuery({ query: messagesQuery });
				// Add message mutation data to end.
				data.messages.push(addMessage);
				// Write data back to cache.
				store.writeQuery({ query: messagesQuery, data });
			}
		});
		this.input.value = '';
	};

	return (
		<div className="message-board">
			<div className="message-box">
				{mapped.reverse()}
			</div>
			<form name="submitMessage" onSubmit={handleSubmit}>
				<div>
					<input
						className="submit-field"
						size="20"
						type="text"
						placeholder="type a message"
						name="message"
						autoComplete="off"
						ref={input => (this.input = input)}
					/>
				</div>
				<div>
					<input className="submit-chat-button" type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
};

export default MessageBoard;
